# Free Image Generation APIs Research

## Research Date: 2026-03-26

## Goal
Find free APIs to generate images via text prompts - no paid subscription required

---

## Options Evaluated

### 1. Hugging Face Inference API (RECOMMENDED ⭐)
**Status:** FREE tier available

**How to use:**
- Get free API token from huggingface.co
- Use diffusers models (free)
- Example: `https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev`

**Pros:**
- Completely free
- Good quality models (Stable Diffusion, FLUX)
- Easy to use

**Cons:**
- Rate limited on free tier
- Some models require approval

**Website:** https://huggingface.co/inference

---

### 2. Stability AI (Free Tier)
**Status:** Limited free tier

**Details:**
- Offers free credits for new users
- SDXL available

**Website:** https://platform.stability.ai/

**Assessment:** ⏳ Worth trying but may require signup

---

### 3. Replicate (Pay-per-use)
**Status:** Not free, but cheap

**Details:**
- Run open-source models (SDXL, FLUX, etc.)
- Pay per image generation
- Very cheap (~$0.003-0.01 per image)

**Website:** https://replicate.com/

**Assessment:** 💰 Not free but affordable alternative

---

### 4. Open Source Local Models

#### Stable Diffusion (AUTOMATIC1111)
- Self-host locally
- Free but requires GPU
- Setup on local machine or cloud

**Website:** https://github.com/AUTOMATIC1111/stable-diffusion-webui

**Assessment:** 🔧 Good for local setup, not API-based

#### InvokeAI
- Open source
- Can be self-hosted

**Website:** https://github.com/invoke-ai/InvokeAI

---

### 5. Google Gemini (via API)
**Status:** Limited free tier

- Some image generation capability
- Check Google AI Studio

**Website:** https://aistudio.google.com/

**Assessment:** ⏳ Worth exploring

---

## Recommended Solution

**For your use case (AI podcast audio channel):**

### Option A: Hugging Face Inference API
1. Sign up at huggingface.co
2. Get free API token
3. Use FLUX.1-dev or SDXL model
4. API endpoint example:
```
POST https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev
Headers: Authorization: Bearer YOUR_TOKEN
Payload: {"inputs": "your prompt here"}
```

### Option B: Replicate (if HF doesn't work)
- Very cheap backup option
- ~$0.004 per image

---

## Next Steps

1. [ ] Sign up for Hugging Face account
2. [ ] Generate API token
3. [ ] Test with simple prompt
4. [ ] Integrate into your workflow

---

## Alternative: Use AI Voice + Static Images
If image generation is too complex, consider:
- Use static background images
- Or simple templates
- Focus on audio content quality

---

*Research continues*