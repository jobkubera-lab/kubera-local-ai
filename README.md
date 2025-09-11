# Kubera Local AI (Ollama + Open WebUI)

This repository documents my experiments with running local LLMs (Large Language Models) using [Ollama](https://ollama.com) and [Open WebUI](https://github.com/open-webui/open-webui).  
No cloud, no subscriptions — everything runs directly on my laptop.

## Installed stack
- Ollama → lightweight runtime for models
- Open WebUI → admin panel and chat interface
- Docker → containerized environment

## Models I work with
- ✅ Installed:  
  - mistral:7b (first test model)

- 📌 Planned:  
  - llama3:8b  
  - qwen2:7b-instruct (or qwen2:7b)  
  - gemma2:9b  
  - mixtral:8x7b  
  - llama3:70b (heavy — optional)

## How to use (quick steps)
1. Go to Admin Panel → Models → Manage models  
2. In the field “Download model from Ollama.com”, enter the model tag and press ↓  
   Example: mistral:7b  
3. Wait for the download (2–20 min depending on internet speed).  
4. Once ready → open New Chat, select the model at the top, and ask:  
   *“Who are you and what model are you running?”*  
   It should reply locally.

## Performance notes
- 7B/8B models run fine on laptops.  
- 70B may fail without enough RAM/VRAM (normal).  

## Security
- No secrets, keys, or logs are committed.  
- Repository is only for instructions, configs, and lists of installed models.
