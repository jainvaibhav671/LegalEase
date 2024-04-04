import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

encoder_max_length = 1024*16
decoder_max_length = 1024

model_name = "nsi319/legal-led-base-16384"
tokenizer = AutoTokenizer.from_pretrained(model_name)
led = AutoModelForSeq2SeqLM.from_pretrained(model_name, use_cache=False)
if torch.cuda.is_available():   
    led = led.to("cuda")

# Pre-allocate global attention mask
global_attention_mask = torch.zeros((1, encoder_max_length)).to(led.device)
global_attention_mask[:, 0] = 1  # Put global attention on <s> token

def generate_summary_gpu(input_text):
    inputs = tokenizer(
        input_text,
        padding="max_length",
        truncation=True,
        max_length=encoder_max_length,
        return_tensors="pt",
    )
    input_ids = inputs.input_ids.to(led.device)
    attention_mask = inputs.attention_mask.to(led.device)
    
    l = min(max(len(input_text), 256), 1024)  # Clamp length to avoid excessive memory usage
    outputs = led.generate(
        input_ids, 
        attention_mask=attention_mask, 
        global_attention_mask=global_attention_mask, 
        max_length=l, 
        num_beams=2,
        repetition_penalty=2.5,
        early_stopping=True
    )
    preds = [tokenizer.decode(gen_id, skip_special_tokens=True, clean_up_tokenization_space=True) for gen_id in outputs]
    return "".join(preds)
