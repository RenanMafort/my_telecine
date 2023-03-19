const imagens = document.querySelectorAll('#imagens-container img');
const tempoEntreImagens = 4000; // 5 segundos

let imagemAtual = 0;

function passarImagem() {
  imagens[imagemAtual].classList.remove('foco');
  imagemAtual = (imagemAtual + 1) % imagens.length;
  imagens[imagemAtual].classList.add('foco');
}

setInterval(passarImagem, tempoEntreImagens);


var links = document.querySelectorAll('.links');

		// Adiciona um evento de clique a cada link
		links.forEach(function(link) {
			link.addEventListener('click', function(event) {
				event.preventDefault(); // Impede o comportamento padrão de abrir outra página

				// Obtém o valor do atributo "href" do link clicado
				var href = this.getAttribute('href');

				// Define o valor do atributo "src" do iframe para o valor de "href"
				document.getElementById('iframe').setAttribute('src', href);
			});
		});