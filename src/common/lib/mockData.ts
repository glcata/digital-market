import {Category, Game} from '@/common/store';

export const mockGames: Game[] = [
    {
        id: 1,
        title: 'Astral Legends',
        description: 'A space exploration game with elements of survival and base building. Navigate through procedurally generated galaxies.',
        price: 49.99,
        discountedPrice: 39.99,
        releaseDate: '2023-09-20',
        developer: 'Cosmic Games',
        publisher: 'Nova Entertainment',
        genres: ['Survival', 'Exploration', 'Simulation'],
        tags: ['Space', 'Sci-fi', 'Building'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.5,
        coverImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2811&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=2942&auto=format&fit=crop'
        ]
    },
    {
        id: 2,
        title: 'Medieval Dynasty',
        description: 'Build your legacy in a medieval world through farming, crafting, and expanding your influence across the kingdom.',
        price: 39.99,
        releaseDate: '2023-06-12',
        developer: 'Kingdom Studios',
        publisher: 'Historic Games',
        genres: ['Simulation', 'Strategy', 'RPG'],
        tags: ['Medieval', 'Building', 'Life Sim'],
        platforms: ['PC', 'Xbox'],
        rating: 4.3,
        coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551029506-0807df4e2031?q=80&w=2891&auto=format&fit=crop'
        ]
    },
    {
        id: 3,
        title: 'Space Colony',
        description: 'Build and manage your own space colony on distant planets. Research new technologies, manage resources, and ensure the survival of your colonists.',
        price: 39.99,
        discountedPrice: 29.99,
        releaseDate: '2023-12-20',
        developer: 'Colony Games',
        publisher: 'Space Entertainment',
        genres: ['Strategy', 'Simulation', 'Management'],
        tags: ['Space', 'Colony', 'Building'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.6,
        coverImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2944&auto=format&fit=crop',
        screenshots: [
            'https://cdnb.artstation.com/p/assets/images/images/011/423/951/large/antoine-van-bergen-hyperion-a3-03.jpg',
            'https://as2.ftcdn.net/v2/jpg/11/17/46/83/1000_F_1117468345_w6lYi5DTiF4BkeEIdI2WRruPob7kHraT.jpg',
            'https://as2.ftcdn.net/v2/jpg/12/56/52/07/1000_F_1256520736_bAF5trxLVDZorklxGXOFuk1bJDWl1o0Y.jpg'
        ],
        featured: true
    },
    {
        id: 4,
        title: 'Racing Evolution GT',
        description: 'Experience the ultimate racing simulation with photorealistic graphics and precise physics.',
        price: 54.99,
        releaseDate: '2023-10-22',
        developer: 'Speed Studios',
        publisher: 'Track Entertainment',
        genres: ['Racing', 'Simulation', 'Sports'],
        tags: ['Realistic', 'Competitive', 'Driving'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.8,
        coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=2950&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 5,
        title: 'Monster Hunters',
        description: 'Team up with friends to hunt massive creatures in a vibrant fantasy world filled with dangers and rewards.',
        price: 49.99,
        releaseDate: '2023-07-30',
        developer: 'Creature Studios',
        publisher: 'Hunter Games',
        genres: ['Action', 'RPG', 'Co-op'],
        tags: ['Fantasy', 'Multiplayer', 'Combat'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
        rating: 4.5,
        coverImage: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1511296265581-c2450046447d?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508896694512-1eade558679c?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 6,
        title: 'Pixel Pioneers',
        description: 'A retro-style adventure game where you build and manage your own pixel art world. Create, explore, and survive in this charming sandbox experience.',
        price: 24.99,
        discountedPrice: 19.99,
        releaseDate: '2023-12-01',
        developer: 'Retro Studios',
        publisher: 'Indie Games Collective',
        genres: ['Adventure', 'Sandbox', 'Indie'],
        tags: ['Pixel Art', 'Creative', 'Exploration'],
        platforms: ['PC', 'Nintendo'],
        rating: 4.6,
        coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2950&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2942&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 7,
        title: 'Quantum Chess',
        description: 'A revolutionary take on chess where quantum mechanics meets classic strategy. Experience mind-bending moves and parallel universe gameplay.',
        price: 29.99,
        releaseDate: '2023-11-10',
        developer: 'Quantum Games',
        publisher: 'Brain Teasers Inc',
        genres: ['Strategy', 'Puzzle', 'Educational'],
        tags: ['Chess', 'Quantum', 'Brain Training'],
        platforms: ['PC', 'Mobile'],
        rating: 4.4,
        coverImage: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 8,
        title: 'Ocean Explorer',
        description: 'Dive into the depths of the ocean in this stunning underwater exploration game. Discover ancient ruins, mysterious creatures, and hidden treasures.',
        price: 34.99,
        discountedPrice: 27.99,
        releaseDate: '2023-10-15',
        developer: 'Deep Blue Studios',
        publisher: 'Marine Entertainment',
        genres: ['Adventure', 'Exploration', 'Simulation'],
        tags: ['Underwater', 'Open World', 'Discovery'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.7,
        coverImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://ulstein.com/imager/images/References/9352/PHC-OceanExplorerArrival11_2021-10-19-115011_rtet_f906cb2ad194a18d4288d967373bffb8.jpg',
            'https://images6.alphacoders.com/115/1158899.jpg',
            'https://wallpapers.com/images/hd/navagio-ocean-desktop-rfvjn2g8dm4vayed.jpg'
        ],
        featured: true
    },
    {
        id: 9,
        title: 'Farm & Friends',
        description: 'A cozy farming simulation game where you build your dream farm, raise animals, and connect with friends in a peaceful countryside setting.',
        price: 29.99,
        releaseDate: '2023-08-20',
        developer: 'Cozy Games Studio',
        publisher: 'Relaxation Games',
        genres: ['Simulation', 'Life Sim', 'Multiplayer'],
        tags: ['Farming', 'Cozy', 'Social'],
        platforms: ['PC', 'Mobile', 'Nintendo'],
        rating: 4.8,
        coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 10,
        title: 'Mystic Realms',
        description: 'An enchanting fantasy RPG where you master ancient magic, forge alliances with mythical creatures, and battle dark forces threatening the realm.',
        price: 49.99,
        releaseDate: '2023-11-28',
        developer: 'Fantasy Forge',
        publisher: 'Mythic Entertainment',
        genres: ['RPG', 'Fantasy', 'Adventure'],
        tags: ['Magic', 'Open World', 'Story Rich'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.7,
        coverImage: 'https://www.allkeyshop.com/blog/wp-content/uploads/Path-of-Exile-2-Exilecon.png',
        screenshots: [
            'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/11/poe2-warrior-class-580x334.jpg',
            'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2694490/ss_8bf65d74e31309d415ef667161e06b20194cbc10.1920x1080.jpg',
            'https://i.imgur.com/bvJBac2.png',
            'https://i.redd.it/p5wcsfgp7x3e1.png'
        ]
    },
    {
        id: 11,
        title: 'Sports Legends 2024',
        description: 'The ultimate sports simulation featuring realistic physics, career modes, and competitive multiplayer across multiple sports disciplines.',
        price: 59.99,
        discountedPrice: 49.99,
        releaseDate: '2024-01-15',
        developer: 'Sports Interactive',
        publisher: 'Athletic Games',
        genres: ['Sports', 'Simulation', 'Multiplayer'],
        tags: ['Competitive', 'Realistic', 'Career Mode'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
        rating: 4.5,
        coverImage: 'https://images.unsplash.com/photo-1511426463457-0571e247d816?q=80&w=2787&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1511426463457-0571e247d816?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511426463457-0571e247d816?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511426463457-0571e247d816?q=80&w=2787&auto=format&fit=crop'
        ]
    },
    {
        id: 12,
        title: 'Cyberpunk Detective',
        description: 'Solve crimes in a neon-lit futuristic city where technology and humanity collide. Use advanced AI tools and cybernetic enhancements to crack complex cases.',
        price: 54.99,
        discountedPrice: 44.99,
        releaseDate: '2024-02-20',
        developer: 'Neon Noir Studios',
        publisher: 'Future Crime Games',
        genres: ['Adventure', 'Mystery', 'Cyberpunk'],
        tags: ['Detective', 'Story Rich', 'Futuristic'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.8,
        coverImage: 'https://assets.fontsinuse.com/static/use-media-items/225/224662/upto-700xauto/66487d68/@2x/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7.jpeg',
        screenshots: [
            'https://pic.clubic.com/336428c52141617/1200x675/smart/cyberpunk-2077-phantom-liberty.jpg',
            'https://media.lesechos.com/api/v1/images/view/5fd2542bd286c21c244f5c07/1280x720-webp/061112827148-web-tete.webp',
            'https://pbs.twimg.com/media/EnwTGUvWMAEAc3j?format=jpg&name=large'
        ]
    },
    {
        id: 13,
        title: 'Ancient Civilizations',
        description: 'Lead your civilization from the Stone Age to the Space Age. Research technologies, build wonders, and compete with other civilizations in this epic strategy game.',
        price: 49.99,
        releaseDate: '2024-01-30',
        developer: 'History Makers',
        publisher: 'Strategy Games Co',
        genres: ['Strategy', '4X', 'Historical'],
        tags: ['Civilization', 'Turn-based', 'Historical'],
        platforms: ['PC', 'PlayStation'],
        rating: 4.7,
        coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop'
        ]
    },
    {
        id: 14,
        title: 'Zombie Survival Pro',
        description: 'Survive in a post-apocalyptic world overrun by zombies. Build bases, craft weapons, and team up with other survivors in this intense survival game.',
        price: 39.99,
        discountedPrice: 29.99,
        releaseDate: '2024-03-15',
        developer: 'Apocalypse Games',
        publisher: 'Survival Entertainment',
        genres: ['Survival', 'Horror', 'Action'],
        tags: ['Zombies', 'Multiplayer', 'Base Building'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.6,
        coverImage: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1563811771046-ba984ff30900?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563811771046-ba984ff30900?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563811771046-ba984ff30900?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 15,
        title: 'Rider',
        description: 'A motorcycle racing game that combines realism with action. Explore diverse tracks, from circuit to off-road, and customize your bike for maximum performance.',
        price: 59.99,
        discountedPrice: 49.99,
        releaseDate: '2024-03-01',
        developer: 'Two Wheels Studio',
        publisher: 'Speed Masters Games',
        genres: ['Racing', 'Simulation', 'Sports'],
        tags: ['Motorcycle', 'Racing', 'Customization'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.8,
        coverImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1650010/ss_e63042c898d6df888cb87b2611fded1daedacfd0.1920x1080.jpg',
        screenshots: [
            'https://ridevideogame.com/wp-content/uploads/2023/07/ride_5_sw-17_Wyper.png',
            'https://traxion.gg/wp-content/uploads/2023/05/Ride-5-Rebel-Pack-DLC-content-revealed.jpg',
            'https://wallpapercave.com/wp/wp12739334.jpg'
        ]
    },
    {
        id: 16,
        title: 'Fantasy Card Battler',
        description: 'Build your deck and battle against players worldwide in this strategic card game. Collect rare cards, create powerful combinations, and climb the competitive ladder.',
        price: 19.99,
        releaseDate: '2024-02-15',
        developer: 'Card Masters Studio',
        publisher: 'Strategy Games Co',
        genres: ['Card Game', 'Strategy', 'Multiplayer'],
        tags: ['Collectible Cards', 'Competitive', 'Fantasy'],
        platforms: ['PC', 'Mobile', 'Nintendo'],
        rating: 4.6,
        coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 17,
        title: 'Time Traveler',
        description: 'Navigate through different historical periods in this time-traveling adventure. Solve puzzles and prevent paradoxes while exploring ancient civilizations.',
        price: 39.99,
        releaseDate: '2023-12-05',
        developer: 'Chronos Games',
        publisher: 'Time Entertainment',
        genres: ['Adventure', 'Puzzle', 'Historical'],
        tags: ['Time Travel', 'History', 'Story Rich'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
        rating: 4.7,
        coverImage: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2940&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 18,
        title: 'Music Studio Pro',
        description: 'Create, mix, and produce your own music in this comprehensive music production game. Features real instruments and professional mixing tools.',
        price: 49.99,
        discountedPrice: 39.99,
        releaseDate: '2023-09-10',
        developer: 'Sound Studios',
        publisher: 'Music Games',
        genres: ['Music', 'Creative', 'Simulation'],
        tags: ['Music Production', 'Creative', 'Educational'],
        platforms: ['PC', 'Mobile'],
        rating: 4.8,
        coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 19,
        title: 'Martial Arts Master',
        description: 'Train, fight, and become a martial arts legend in this action-packed fighting game. Master different styles and compete in tournaments worldwide.',
        price: 44.99,
        releaseDate: '2023-11-05',
        developer: 'Fight Studios',
        publisher: 'Combat Games',
        genres: ['Fighting', 'Action', 'Sports'],
        tags: ['Martial Arts', 'Competitive', 'Multiplayer'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.4,
        coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop'
        ]
    },
    {
        id: 20,
        title: 'Weather Wizard',
        description: 'Control the elements in this unique weather manipulation game. Create storms, clear skies, and solve environmental puzzles.',
        price: 34.99,
        releaseDate: '2023-10-25',
        developer: 'Element Studios',
        publisher: 'Nature Games',
        genres: ['Puzzle', 'Strategy', 'Simulation'],
        tags: ['Weather', 'Environmental', 'Creative'],
        platforms: ['PC', 'Mobile', 'Nintendo'],
        rating: 4.3,
        coverImage: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2865&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2865&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2865&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2865&auto=format&fit=crop'
        ]
    },
    {
        id: 21,
        title: 'Space Engineers',
        description: 'Build and manage your own space station in this sandbox game. Design ships, mine resources, and survive in the vastness of space.',
        price: 24.99,
        releaseDate: '2024-02-15',
        developer: 'Keen Software House',
        publisher: 'Space Games Inc',
        genres: ['Sandbox', 'Simulation', 'Survival'],
        tags: ['Space', 'Building', 'Engineering'],
        platforms: ['PC', 'Xbox'],
        rating: 4.6,
        coverImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1133870/60b88eab8ca930ca55b62b58eaccdfbbd18bb58e/capsule_616x353.jpg',
        screenshots: [
            'https://assetsio.gnwcdn.com/1_rdRLe8b.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
            'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/space-engineers-2-new-vrage3-engine.jpg',
            'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/space-engineers-2-improved-multiplayer.jpg'
        ]
    },
    {
        id: 22,
        title: 'Medieval Dynasty',
        description: 'Build your legacy in a medieval world through farming, crafting, and expanding your influence across the kingdom.',
        price: 39.99,
        releaseDate: '2023-06-12',
        developer: 'Kingdom Studios',
        publisher: 'Historic Games',
        genres: ['Simulation', 'Strategy', 'RPG'],
        tags: ['Medieval', 'Building', 'Life Sim'],
        platforms: ['PC', 'Xbox'],
        rating: 4.3,
        coverImage: 'https://www.toplitz-productions.com/files/toplitz/titel/DYNASTY/MEDIEVALDYNASTY/HEROART/ns-vr-news1920.jpg',
        screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1129580/ss_7407b740f35f9385230ad14799b500a88b0eb84f.1920x1080.jpg',
            'https://videogamesplus.ca/cdn/shop/products/2022-08-1715_17_52-MedievalDynasty_1245x700.png',
            'https://ragequit.gr/wp-content/uploads/2021/10/medievaldynasty-village.jpg',
            'https://videogamesplus.ca/cdn/shop/products/2022-08-1715_17_52-MedievalDynasty_1245x700.png'
        ]
    },
    {
        id: 23,
        title: 'Subnautica',
        description: 'An underwater adventure game set on an alien ocean planet. A massive, open world full of wonder and peril awaits you! Craft equipment, pilot submarines, and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more.',
        price: 24.99,
        releaseDate: '2023-11-20',
        developer: 'Unknown Worlds Entertainment',
        publisher: 'Unknown Worlds Entertainment',
        genres: ['Survival', 'Adventure', 'Open World'],
        tags: ['Underwater', 'Exploration', 'Crafting'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.8,
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg',
        screenshots: [
            'https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_9beef1410f164c98dcc5b2d0e22d03f8949f3138.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_872822c5e50dc71f345416098d29f3e5f6e0f9c4.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_4bda6f67580d94832ed2d400484d0f8e0a0c2b1b.jpg'
        ]
    },
    {
        id: 24,
        title: 'Valheim',
        description: 'A brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory inspired by viking culture.',
        price: 19.99,
        releaseDate: '2023-09-15',
        developer: 'Iron Gate AB',
        publisher: 'Coffee Stain Publishing',
        genres: ['Survival', 'RPG', 'Adventure'],
        tags: ['Viking', 'Open World', 'Multiplayer'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.8,
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg',
        screenshots: [
            'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_9beef1410f164c98dcc5b2d0e22d03f8949f3138.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_872822c5e50dc71f345416098d29f3e5f6e0f9c4.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_4bda6f67580d94832ed2d400484d0f8e0a0c2b1b.jpg'
        ]
    },
    {
        id: 25,
        title: 'Deep Rock Galactic',
        description: 'A 1-4 player co-op first-person shooter featuring space dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.',
        price: 29.99,
        releaseDate: '2023-08-10',
        developer: 'Ghost Ship Games',
        publisher: 'Coffee Stain Publishing',
        genres: ['Action', 'FPS', 'Co-op'],
        tags: ['Dwarves', 'Mining', 'Multiplayer'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.9,
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/548430/header.jpg',
        screenshots: [
            'https://cdn.akamai.steamstatic.com/steam/apps/548430/ss_9beef1410f164c98dcc5b2d0e22d03f8949f3138.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/548430/ss_872822c5e50dc71f345416098d29f3e5f6e0f9c4.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/548430/ss_4bda6f67580d94832ed2d400484d0f8e0a0c2b1b.jpg'
        ]
    },
    {
        id: 26,
        title: 'Satisfactory',
        description: 'A first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, and build multi-story factories.',
        price: 29.99,
        releaseDate: '2023-07-15',
        developer: 'Coffee Stain Studios',
        publisher: 'Coffee Stain Publishing',
        genres: ['Simulation', 'Building', 'Open World'],
        tags: ['Factory', 'Automation', 'Multiplayer'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.7,
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/526870/header.jpg',
        screenshots: [
            'https://cdn.akamai.steamstatic.com/steam/apps/526870/ss_9beef1410f164c98dcc5b2d0e22d03f8949f3138.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/526870/ss_872822c5e50dc71f345416098d29f3e5f6e0f9c4.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/526870/ss_4bda6f67580d94832ed2d400484d0f8e0a0c2b1b.jpg'
        ]
    },
    {
        id: 27,
        title: 'Risk of Rain 2',
        description: 'Escape a chaotic alien planet by fighting through hordes of frenzied monsters – with your friends, or on your own. Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crash landing.',
        price: 24.99,
        releaseDate: '2023-05-20',
        developer: 'Hopoo Games',
        publisher: 'Gearbox Publishing',
        genres: ['Action', 'Roguelike', 'Multiplayer'],
        tags: ['Co-op', 'Procedural', 'Loot'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
        rating: 4.8,
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg',
        screenshots: [
            'https://cdn.akamai.steamstatic.com/steam/apps/632360/ss_9beef1410f164c98dcc5b2d0e22d03f8949f3138.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/632360/ss_872822c5e50dc71f345416098d29f3e5f6e0f9c4.jpg',
            'https://cdn.akamai.steamstatic.com/steam/apps/632360/ss_4bda6f67580d94832ed2d400484d0f8e0a0c2b1b.jpg'
        ]
    }
];

export const categories: Category[] = [
    {
        id: 1,
        name: 'Action',
        slug: 'action',
        image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2940&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Adventure',
        slug: 'adventure',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'RPG',
        slug: 'rpg',
        image: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?q=80&w=2891&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Strategy',
        slug: 'strategy',
        image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/03/endless-legend-city.jpg'
    },
    {
        id: 5,
        name: 'Sports',
        slug: 'sports',
        image: 'https://www.buzztime.com/business/wp-content/uploads/2015/09/interactive-sports-games-750-x-340.jpg'
    },
    {
        id: 6,
        name: 'Simulation',
        slug: 'simulation',
        image: 'https://i.pcmag.com/imagery/roundups/05jeQF8mdJPdJduVAxQDIGb-1..v1620155938.jpg'
    },
    {
        id: 7,
        name: 'Arcade',
        slug: 'Arcade',
        image: 'https://images.unsplash.com/photo-1544785349-c4a5301826fd?q=80&w=2938&auto=format&fit=crop'
    },
    {
        id: 8,
        name: 'Racing',
        slug: 'racing',
        image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2940&auto=format&fit=crop'
    }
];
