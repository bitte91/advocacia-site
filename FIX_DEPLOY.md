# 🔧 Correção do Erro de Deploy

## ❌ Problema Identificado
O erro `@radix-ui/react-sheet` não existe no npm registry.

## ✅ Soluções

### **Opção 1: Usar Package Minimal (Recomendado)**

1. **Substitua** o `package.json` atual pelo `package-minimal.json`:
```bash
# Renomeie o arquivo atual
mv package.json package-backup.json

# Use a versão minimal
mv package-minimal.json package.json
```

2. **Instale** as dependências:
```bash
npm install
```

### **Opção 2: Remover Pacotes Problemáticos**

Se quiser manter o package.json atual, remova estes pacotes que podem causar problemas:

```bash
npm uninstall @radix-ui/react-sheet
npm uninstall @radix-ui/react-context-menu
npm uninstall @radix-ui/react-menubar
npm uninstall @radix-ui/react-navigation-menu
npm uninstall @radix-ui/react-toggle-group
```

### **Opção 3: Deploy com Vercel (Mais Fácil)**

1. **Acesse**: https://vercel.com
2. **Conecte** com GitHub
3. **Importe** o repositório
4. **Configure**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **Adicione** variáveis de ambiente:
   - `DATABASE_URL`: `file:./db/custom.db`

## 🚀 Deploy Rápido

### **1. GitHub + Vercel (Recomendado)**
```bash
# 1. Instalar Git
# 2. Inicializar repositório
git init
git add .
git commit -m "Site de advocacia funcional"

# 3. Criar repositório no GitHub
# 4. Conectar com Vercel
# 5. Deploy automático!
```

### **2. Netlify (Alternativa)**
```bash
# 1. Build local
npm run build

# 2. Upload pasta 'out' para Netlify
# 3. Deploy instantâneo!
```

## 📋 Checklist de Deploy

- [ ] ✅ Formulário funcional implementado
- [ ] ✅ Validação com Zod
- [ ] ✅ API route criada
- [ ] ✅ Banco de dados configurado
- [ ] ⚠️ Package.json corrigido
- [ ] ⚠️ Deploy no Vercel/Netlify

## 🎯 Próximos Passos

1. **Corrija** o package.json
2. **Teste** localmente: `npm run dev`
3. **Faça** deploy no Vercel
4. **Configure** domínio personalizado (opcional)

---

**💡 Dica**: O Vercel é mais tolerante a erros de dependências e pode fazer o deploy mesmo com alguns pacotes problemáticos.
