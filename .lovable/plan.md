

## Correção: MetricsBar sobrepondo o indicador "Scroll" do Hero

### Problema
A `MetricsBar` usa `className="-mt-12 md:-mt-16 z-10"` para subir sobre o final do Hero. O indicador "Scroll" no Hero está posicionado com `absolute bottom-8`, ficando atrás da MetricsBar por conta do `z-10`.

### Solução
Duas alterações simples:

1. **`Hero.tsx` (linha ~61)**: Aumentar o `bottom` do indicador de scroll de `bottom-8` para `bottom-24 md:bottom-28`, movendo-o para cima o suficiente para não ser coberto pela MetricsBar.

2. **Alternativa mais limpa**: Adicionar `z-20` ao container do indicador de scroll para que fique acima da MetricsBar (`z-10`).

A abordagem recomendada e usar as duas: subir o indicador (`bottom-24`) e garantir z-index (`z-20`), pois mesmo visualmente acima, o scroll indicator deve ficar clicavel e visivel sem conflito.

### Detalhes tecnicos

- **Arquivo**: `src/components/Hero.tsx`, linha 61
- **De**: `className="absolute bottom-8 left-1/2 -translate-x-1/2 ... animate-bounce-slow"`
- **Para**: `className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 ... animate-bounce-slow"`

Nenhum outro arquivo precisa ser alterado.

