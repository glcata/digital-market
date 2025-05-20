import {Category, Game} from '@/common/lib/types';

export const mockGames: Game[] = [
    {
        id: 2,
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
        ],
        featured: true
    },
    {
        id: 3,
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
        id: 4,
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
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2944&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2944&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2944&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
            'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2940&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 10,
        title: 'Neon Nights',
        description: 'A cyberpunk-themed rhythm game where you navigate through neon-lit streets, matching beats and battling rival DJs in a futuristic city.',
        price: 39.99,
        releaseDate: '2023-09-05',
        developer: 'Beat Masters',
        publisher: 'Rhythm Games Co',
        genres: ['Rhythm', 'Music', 'Action'],
        tags: ['Cyberpunk', 'Music', 'Arcade'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
        rating: 4.5,
        coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2950&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2942&auto=format&fit=crop'
        ]
    },
    {
        id: 11,
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
        id: 12,
        title: 'Space Engineers 2',
        description: 'Design, build, and pilot your own spacecraft in this advanced space engineering simulation. Explore the galaxy and survive in the harsh environment of space.',
        price: 44.99,
        discountedPrice: 34.99,
        releaseDate: '2023-12-15',
        developer: 'Cosmic Engineering',
        publisher: 'Space Games Inc',
        genres: ['Simulation', 'Engineering', 'Space'],
        tags: ['Building', 'Physics', 'Exploration'],
        platforms: ['PC', 'Xbox'],
        rating: 4.6,
        coverImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2811&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2811&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2811&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2811&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 13,
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
        coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2884&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 14,
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
        id: 15,
        title: 'Puzzle Master',
        description: 'A collection of mind-bending puzzles and brain teasers that will challenge your problem-solving skills and creativity.',
        price: 19.99,
        releaseDate: '2023-10-01',
        developer: 'Brain Games Studio',
        publisher: 'Puzzle Entertainment',
        genres: ['Puzzle', 'Casual', 'Educational'],
        tags: ['Brain Training', 'Family', 'Relaxing'],
        platforms: ['PC', 'Mobile', 'Nintendo'],
        rating: 4.3,
        coverImage: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 16,
        title: 'Horror Mansion',
        description: 'A spine-chilling survival horror game where you must escape a haunted mansion while uncovering its dark secrets.',
        price: 39.99,
        releaseDate: '2023-09-15',
        developer: 'Nightmare Studios',
        publisher: 'Horror Games Inc',
        genres: ['Horror', 'Survival', 'Adventure'],
        tags: ['Psychological', 'Atmospheric', 'Thriller'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.6,
        coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 17,
        title: 'City Builder Pro',
        description: 'Create and manage your dream city in this comprehensive urban planning and management simulation.',
        price: 34.99,
        discountedPrice: 24.99,
        releaseDate: '2023-12-10',
        developer: 'Urban Games',
        publisher: 'Simulation Studios',
        genres: ['Simulation', 'Strategy', 'Management'],
        tags: ['City Building', 'Economic', 'Creative'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.4,
        coverImage: 'https://images.unsplash.com/photo-1608146115884-bd5ffd43af65?q=80&w=2880&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1608146115884-bd5ffd43af65?q=80&w=2880&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1608146115884-bd5ffd43af65?q=80&w=2880&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1608146115884-bd5ffd43af65?q=80&w=2880&auto=format&fit=crop'
        ]
    },
    {
        id: 18,
        title: 'Battle Royale Legends',
        description: 'Join the ultimate battle royale experience with unique characters, dynamic environments, and intense combat.',
        price: 0,
        releaseDate: '2023-08-01',
        developer: 'Battle Games',
        publisher: 'Free-to-Play Entertainment',
        genres: ['Battle Royale', 'Action', 'Multiplayer'],
        tags: ['Free-to-Play', 'Competitive', 'Team-based'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Mobile'],
        rating: 4.2,
        coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop'
        ],
        featured: true
    },
    {
        id: 19,
        title: 'Cooking Master',
        description: 'Become a culinary expert in this immersive cooking simulation game. Create dishes from around the world and build your restaurant empire.',
        price: 29.99,
        discountedPrice: 19.99,
        releaseDate: '2023-11-20',
        developer: 'Culinary Games',
        publisher: 'Food Entertainment',
        genres: ['Simulation', 'Cooking', 'Management'],
        tags: ['Cooking', 'Restaurant', 'Creative'],
        platforms: ['PC', 'Mobile', 'Nintendo'],
        rating: 4.5,
        coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop'
        ]
    },
    {
        id: 20,
        title: 'Wildlife Photographer',
        description: 'Capture stunning wildlife moments in this photography simulation game. Travel to exotic locations and document rare animal species.',
        price: 24.99,
        releaseDate: '2023-10-15',
        developer: 'Nature Studios',
        publisher: 'Wildlife Games',
        genres: ['Simulation', 'Adventure', 'Educational'],
        tags: ['Photography', 'Nature', 'Exploration'],
        platforms: ['PC', 'PlayStation', 'Xbox'],
        rating: 4.6,
        coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2874&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2874&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2874&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2874&auto=format&fit=crop'
        ]
    },
    {
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2940&auto=format&fit=crop'
    },
    {
        id: 5,
        name: 'Sports',
        slug: 'sports',
        image: 'https://images.unsplash.com/photo-1511426463457-0571e247d816?q=80&w=2787&auto=format&fit=crop'
    },
    {
        id: 6,
        name: 'Simulation',
        slug: 'simulation',
        image: 'https://images.unsplash.com/photo-1608146115884-bd5ffd43af65?q=80&w=2880&auto=format&fit=crop'
    },
    {
        id: 7,
        name: 'Indie',
        slug: 'indie',
        image: 'https://images.unsplash.com/photo-1544785349-c4a5301826fd?q=80&w=2938&auto=format&fit=crop'
    },
    {
        id: 8,
        name: 'Racing',
        slug: 'racing',
        image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2940&auto=format&fit=crop'
    }
];
