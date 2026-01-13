# Componentes da UI - shadcn/ui

**Atenção:** Esta pasta é **essencial** para o funcionamento e a aparência do projeto.

## O que são esses componentes?

Esta pasta (`/ui`) contém uma biblioteca de componentes de interface de usuário (UI) baseada no [shadcn/ui](https://ui.shadcn.com/). São blocos de construção fundamentais, como:

- **Botões** (`button.tsx`)
- **Cards** (`card.tsx`)
- **Modais** (`dialog.tsx`)
- **Formulários** (`form.tsx`)
- **Menus** (`dropdown-menu.tsx`)
- E muitos outros...

## Por que eles são importantes?

1.  **Consistência Visual:** Garantem que todos os elementos da interface (botões, inputs, etc.) tenham a mesma aparência, criando uma experiência de usuário coesa e profissional.
2.  **Reutilização de Código:** Evitam a necessidade de reescrever código. Uma vez que um componente como o `Button` é definido, ele pode ser usado em qualquer lugar do projeto com diferentes variações.
3.  **Acessibilidade e Qualidade:** Os componentes do shadcn/ui são construídos com as melhores práticas de acessibilidade (WAI-ARIA) e são amplamente testados pela comunidade.
4.  **Produtividade:** Acelera drasticamente o desenvolvimento, pois não é preciso criar componentes complexos do zero.

## Como usar?

Para usar um componente, basta importá-lo de seu respectivo arquivo.

**Exemplo:**

```tsx
import { Button } from "./button";

// ...

<Button variant="outline">Clique Aqui</Button>;
```
