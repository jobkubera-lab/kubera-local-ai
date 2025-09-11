# Setup notes (Kubera Local AI)

This is my personal step-by-step log of installing and managing local LLMs with Ollama and Open WebUI.

## 0. Requirements
- Docker installed
- Open WebUI running
- Ollama available at http://ollama:11434

## 1. Model installation
Admin Panel → Models → Manage models  
Download these tags in order:
1. mistral:7b
2. llama3:8b
3. qwen2:7b-instruct (or qwen2:7b)
4. gemma2:9b
5. mixtral:8x7b
6. llama3:70b (optional, heavy)

Alternative CLI:
`bash
ollama pull mistral:7b
