<script setup>
import { ref } from "vue";
import heart from "./assets/images/icon-heart.png";
import heartActive from "./assets/images/icon-heart-active.png";
import lupa from "./assets/images/icon-search.svg";

// Variável reativa que armazena o estado de cada coração
const image = ref([heart, heart, heart]);
// Inicialmente, todos os corações estão não curtidos
// Variável reativa que armazena o estado das bordas
const border = ref([false, false, false]);
// Função para alternar as imagens do coração ao clicar e ativar/desativar a borda
const changeImage = (index) => {
  image.value[index] = image.value[index] === heart ? heartActive : heart;
  border.value[index] = !border.value[index];
};
</script>

<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__title"><span>Code</span>Lab</h1>
      <div class="header__search-container">
        <img :src="lupa" alt="Lupa" />
        <input
          type="search"
          name="search"
          placeholder="Pesquisar no blog"
          id="input-search"
        />
      </div>
    </div>
  </header>

  <main>
    <section class="news-container" :class="{ border: border[0] }" data-id="1">
      <div class="news-container__date">
        <span>17 de ago, 2024</span>
        <img :src="image[0]" @click="changeImage(0)" alt="Ícone de coração" />
      </div>
      <div class="news-container__content">
        <h2 class="news-container__title">
          O que é linguagem de programação? Conheça as principais
        </h2>
        <p class="news-container__description">
          Uma das mais populares vertentes da tecnologia da informação, a área
          de programação segue tendo muita demanda de trabalho justamente pela
          velocidade com que dispositivos tecnológicos vêm avançando.
        </p>
      </div>
    </section>
    <section class="news-container" :class="{ border: border[1] }" data-id="2">
      <div class="news-container__date">
        <span>12 de jul, 2024</span>
        <img :src="image[1]" @click="changeImage(1)" alt="Ícone de coração" />
      </div>
      <div class="news-container__content">
        <h2 class="news-container__title">
          GitHub agora permite fazer login sem precisar de senha
        </h2>
        <p class="news-container__description">
          O GitHub anunciou nesta quarta-feira (12) o acesso a partir das
          passkeys, método de autenticação sem senhas. A novidade está
          disponível em uma versão beta pública e pode substituir a autenticação
          em dois fatores.
        </p>
      </div>
    </section>
    <section class="news-container" :class="{ border: border[2] }" data-id="3">
      <div class="news-container__date">
        <span>21 de jun, 2024</span>
        <img :src="image[2]" @click="changeImage(2)" alt="Ícone de coração" />
      </div>
      <div class="news-container__content">
        <h2 class="news-container__title">
          Por que os hiperlinks são azuis em sua maioria?
        </h2>
        <p class="news-container__description">
          Quem navega na internet, certamente já percebeu que ela conta com
          diversos recursos para tornar a nossa vida mais fácil. Entre essas
          opções podemos mencionar os hiperlinks – uma palavra ou termo clicável
          que direciona o leitor.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.header {
  background-color: #17171a;
}

.header__content {
  text-align: center;
  padding: 4rem 3rem;
  max-width: 130rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .header__content {
    padding: 6rem 4rem;
  }
}
.header__title {
  font-size: 2.4rem;
  color: #ffffff;
}
@media (min-width: 768px) {
  .header__title {
    font-size: 4rem;
  }
}
.header__title span {
  color: #e07b67;
}
.header__search-container {
  margin-top: 4rem;
  background-color: #202024;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border: 2px solid #252529;
}
@media (min-width: 768px) {
  .header__search-container {
    gap: 2rem;
  }
}
.header__search-container img {
  width: 2rem;
}
@media (min-width: 768px) {
  .header__search-container img {
    width: 3rem;
  }
}
.header__search-container input {
  background-color: transparent;
  width: 100%;
  max-width: 300px;
  border: none;
  font-size: 1.5rem;
  color: #ffffff;
}
@media (min-width: 768px) {
  .header__search-container input {
    font-size: 2rem;
  }
}
.header__search-container input::placeholder {
  color: #afabb6;
}
.header__search-container input:focus {
  outline: none;
}

main {
  padding: 0 5rem 3rem 5rem;
  max-width: 132rem;
  margin: 5rem auto 0;
}

@media (max-width: 767px) {
  main {
    padding: 0 1rem;
    margin: 4rem auto 0;
  }
  .news-container {
    margin: 0 auto 3rem;
    padding: 2rem;
    max-width: 90%;
  }
}

.news-container {
  background-color: #17171a;
  margin-bottom: 3rem;
  border-radius: 1rem;
  border: 2px solid #252529;
  padding: 2rem;
  transition: all 0.3s;
}
@media (min-width: 768px) {
  main .news-container {
    padding: 3rem;
    margin-bottom: 4.5rem;
  }
}
.news-container__date {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.news-container__date span {
  color: #e07b67;
  font-size: 1.3rem;
}
@media (min-width: 768px) {
  .news-container__date span {
    font-size: 1.4rem;
  }
}
@media (min-width: 992px) {
  .news-container__date span {
    font-size: 1.6rem;
  }
}
.news-container__date .img {
  font-size: 2.5rem;
  color: #e07b67;
}
@media (min-width: 768px) {
  .news-container__date .img {
    font-size: 3rem;
  }
}
.news-container__content {
  margin-top: 2rem;
}
.news-container__title {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 400;
}
@media (min-width: 992px) {
  .news-container__title {
    font-size: 2.4rem;
  }
}
.news-container__description {
  margin-top: 1.5rem;
  font-size: 1.4rem;
  color: #afabb6;
  line-height: 2.4rem;
}
@media (min-width: 768px) {
  .news-container__description {
    font-size: 1.6rem;
  }
}
@media (min-width: 992px) {
  .news-container__description {
    font-size: 2rem;
    line-height: 3.2rem;
  }
}

.img {
  color: #e07b67;
  cursor: pointer;
}

.border {
  border: 2px solid #e07b67;
}
</style>
