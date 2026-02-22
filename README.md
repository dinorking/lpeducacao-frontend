# Landing Page Institucional - Cursos de Graduação

Landing page de conversão para captação de leads de cursos de graduação EAD/presencial/semipresencial, desenvolvida para grandes grupos educacionais.

## 🎯 Objetivo

Gerar leads qualificados através da coleta de **nome, WhatsApp e e-mail**, preparando o usuário para o formulário oficial de pré-matrícula.

## 🏗️ Estrutura da Página

### Seções Principais

1. **TopBar** - Barra de anúncio destacando período de inscrições
2. **Hero** - Seção principal com formulário de lead
3. **Benefits** - Alívio de objeções (flexibilidade, compatibilidade com trabalho)
4. **HowItWorks** - Processo em 3 passos simples
5. **About** - Apresentação institucional e credibilidade
6. **Courses** - Lista de cursos disponíveis
7. **Flexibility** - Modalidades (EAD, presencial, semipresencial)
8. **Locations** - Polos distribuídos pelo Brasil (com busca)
9. **Pricing** - Expectativa de valores e acessibilidade
10. **Trust** - Provas sociais, selos e depoimentos
11. **FAQ** - Perguntas frequentes
12. **FinalCTA** - Formulário de lead repetido (última chamada)
13. **Footer** - Informações institucionais, contatos e LGPD

### Componentes Interativos

- **ScrollToTop** - Botão "voltar ao topo"
- **MobileCTA** - CTA fixo para mobile (aparece ao rolar)
- **UrgencyBanner** - Banner de urgência (aparece após 10s)
- **CookieBanner** - Aviso de cookies/LGPD

## 🎨 Identidade Visual

### Paleta de Cores
- **Primary:** `#003366` (Azul institucional escuro)
- **Secondary:** `#0055A5` (Azul médio)
- **CTA:** `#FF6B35` (Laranja vibrante para conversão)
- **Background:** `#F5F7FA` (Cinza claro)

### Tipografia
- Sans-serif com alta legibilidade
- Hierarquia clara de títulos

## 📱 Mobile-First

A página foi desenvolvida com prioridade absoluta para dispositivos móveis:
- Layout responsivo
- CTAs sempre visíveis
- Formulários otimizados para toque
- CTA fixo na parte inferior (mobile)

## 🔒 LGPD & Privacidade

- Aviso de cookies
- Mensagem de proteção de dados nos formulários
- Links para política de privacidade no rodapé

## 🚀 Funcionalidades

### Formulário de Lead
- Validação de campos
- Máscara automática para WhatsApp: `(00) 00000-0000`
- Design limpo e acessível
- Presente em 2 momentos estratégicos (Hero e Final CTA)

### Busca de Polos
- Campo de busca por cidade/estado
- Listagem dinâmica de localizações

### FAQ Interativo
- Accordion com 8 perguntas frequentes
- Primeira pergunta aberta por padrão

## 📊 Estratégia de Conversão

### Gatilhos Psicológicos
- ✅ Prova social (depoimentos, números)
- ✅ Urgência (inscrições em andamento)
- ✅ Autoridade (MEC, ISO, certificações)
- ✅ Escassez sutil (vagas limitadas)
- ✅ Alívio de objeções (FAQ completo)

### Jornada do Usuário
1. Usuário chega na landing
2. Vê proposta de valor clara no Hero
3. Entende benefícios e processo
4. Ganha confiança com credenciais
5. Resolve objeções no FAQ
6. Preenche formulário (Hero ou Final)
7. É redirecionado para formulário oficial

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Lucide React (ícones)
- Componentes UI customizados

## 📝 Customização

Para adaptar a landing para sua instituição:

1. **Branding:** Altere cores em todos os componentes (buscar por `#003366`, `#0055A5`, `#FF6B35`)
2. **Conteúdo:** Edite textos nos componentes individuais
3. **Cursos:** Modifique array em `Courses.tsx`
4. **Polos:** Atualize array em `Locations.tsx`
5. **FAQ:** Personalize perguntas em `FAQ.tsx`
6. **Formulário:** Configure redirecionamento em `LeadForm.tsx` (linha 30)

## ⚙️ Integração

No componente `LeadForm.tsx`, substitua o `alert` pela integração real:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Enviar para seu backend/CRM
  // await api.post('/leads', formData);
  
  // Redirecionar para formulário oficial
  window.location.href = 'URL_DO_FORMULARIO_OFICIAL';
};
```

## 📈 Métricas Sugeridas

- Taxa de conversão (formulário/visitas)
- Origem do tráfego
- Tempo médio na página
- Scroll depth
- Abandono de formulário
- Cliques em CTAs

---

**Desenvolvido com foco em conversão e experiência do usuário** 🎓
