let preChargedItems = [
    {
        id: '5f49fab9-3135-4676-a160-5c3fdbb1ae92',
        image: '/assets/images/amd-card.png',
        title: 'Ryzen 5 5600X',
        description: 'Lo mas nuevo de AMD, cuenta con "Zen 3" Core Architecture, Tecnología AMD StoreMI y utilidad AMD Ryzen™ Master',
        price: 200000,
        category: 'CPU AMD',
        creationDate: '2023-10-14'
    },
    {
        id: 'fc3025ec-f314-4b63-9765-1e8df3ee358a',
        image: '/assets/images/intel-card.png',
        title: 'I9-12900k',
        description: 'Mejora el rendimiento de tu computadora con el Procesador Intel Core i9-12900K, ideal para aquellos que buscan un alto rendimiento en sus tareas diarias y en juegos.',
        price: 450000,
        category: 'CPU INTEL',
        creationDate: '2023-09-14'
    },
    {
        id: '2e897bad-d4e4-413d-a515-ed95df9ad917',
        image: '/assets/images/amd-card2.png',
        title: 'Ryzen 5 5600G',
        description: 'Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 5 5600G, diseñado para brindarte un rendimiento excepcional en tus juegos favoritos.',
        price: 150000,
        category: 'CPU AMD',
        creationDate: '2023-09-04'
    },
    {
        id: '9b386ad9-80ff-4d27-af4d-1c47c00a8780',
        image: '/assets/images/intel-card2.png',
        title: 'I5-10400F',
        description: 'Mejora tu experiencia de juego con el Procesador gamer Intel Core i5-10400F, diseñado para brindarte un rendimiento óptimo en tus partidas.',
        price: 140000,
        category: 'CPU INTEL',
        creationDate: '2022-10-29'
    }
]

if (JSON.parse(localStorage.getItem('items')) === null) {
    localStorage.setItem('items', JSON.stringify(preChargedItems))
}
