const app = Vue.createApp({
    data() {
        return {
            produto: 'Meias da Vue',
            descricao: 'Meias de algodão e poliéster da Vue. Obrigado pelo curso.',
            url: "https://natham.vercel.app/",
            imagem: './assets/images/socks_blue.jpg',
            quantidade: 100,
            estaAVenda: true
        }
    }
})
