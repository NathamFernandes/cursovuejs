const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            description: 'Meia azul',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', description: 'Meia verde' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', description: 'Meia azul'},
            ],
            impossivelRemover: false
        }   
    },
    methods: {
        addToCart() {
            this.cart += 1
            console.log(this.cart)
            this.impossivelRemover = false
        },
        removeFromCart() {
            if (this.cart == 0) {
                this.impossivelRemover = true
            } else {
                this.cart -= 1
                console.log(this.cart)
            }

        },
        updateDisplay(imagem, descricao) {
            this.image = imagem
            this.description = descricao
        }

    }
})
