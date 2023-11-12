const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 123, color: 'blue'},
                {id: 124, color: 'green'}
            ],
            sizes: ['P', 'M', 'G']
        }
    }
})
