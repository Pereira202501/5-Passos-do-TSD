const versiculos = [
  "Salmos 23:1 — O Senhor é o meu pastor; nada me faltará.",
  "Filipenses 4:13 — Posso todas as coisas naquele que me fortalece.",
  "João 3:16 — Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito...",
  "Provérbios 3:5 — Confia no Senhor de todo o teu coração e não te apoies no teu próprio entendimento.",
  "Isaías 41:10 — Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus.",
  "Mateus 6:33 — Mas buscai primeiro o Reino de Deus e a sua justiça...",
  "Romanos 8:28 — Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.",
  "Salmos 91:1 — Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
  "Jeremias 29:11 — Porque eu bem sei os pensamentos que tenho sobre vós, diz o Senhor...",
  "Mateus 11:28 — Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
  "Salmos 27:1 — O Senhor é a minha luz e a minha salvação; a quem temerei?",
  "Romanos 12:2 — E não vos conformeis com este mundo, mas transformai-vos pela renovação da vossa mente...",
  "Tiago 1:5 — E, se algum de vós tem falta de sabedoria, peça-a a Deus...",
  "1 João 4:8 — Aquele que não ama não conhece a Deus, porque Deus é amor.",
  "Hebreus 11:1 — Ora, a fé é o firme fundamento das coisas que se esperam...",
  "Salmos 46:1 — Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
  "Efésios 6:11 — Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo.",
  "Gálatas 5:22 — Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fé...",
  "Salmos 37:5 — Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
  "Isaías 40:31 — Mas os que esperam no Senhor renovarão as suas forças...",
  "Mateus 5:9 — Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.",
  "Provérbios 4:23 — Sobre tudo o que se deve guardar, guarda o teu coração...",
  "Romanos 10:9 — Se com a tua boca confessares ao Senhor Jesus, e em teu coração creres...",
  "Salmos 119:105 — Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
  "João 14:6 — Eu sou o caminho, a verdade e a vida; ninguém vem ao Pai, senão por mim.",
  "2 Coríntios 5:7 — Porque andamos por fé, e não por vista.",
  "Salmos 34:8 — Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia.",
  "Colossenses 3:23 — E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor...",
  "Josué 1:9 — Não te mandei eu? Esforça-te, e tem bom ânimo...",
  "Apocalipse 3:20 — Eis que estou à porta e bato; se alguém ouvir a minha voz..."
];

const hoje = new Date();
const indice = hoje.getDate() % versiculos.length;
document.getElementById("versiculo").textContent = versiculos[indice];
