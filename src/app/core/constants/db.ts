import { Book } from "../models/book";
import { DB } from "../models/database";


export const database: DB = {
    authors: [
        {
            id: 'auth_0',
            name: 'Roberto Arlt',
            brief: "Roberto Arlt was an Argentine writer born Roberto Godofredo Christophersen Arlt in Buenos Aires on April 2, 1900. His parents were both immigrants: his father Karl Arlt was a Prussian from Posen (now Poznan in present-day Poland) and his mother was Ekatherine Iobstraibitzer, a native of Trieste and Italian speaking. German was the language commonly used at their home. His relationship with his father was stressful, as Karl Arlt was a very severe and austere man, by Arlt's own account. The memory of his oppressive father would appear in several of his writings. For example, Remo Erdosain (a character at least partially based on Arlt's own life) often recalls his abusive father and how little if any support he would give him. After being expelled from school at the age of eight, Arlt became an autodidact and worked at all sorts of different odd jobs before landing a job on at a local newspaper: as clerk at a bookstore, apprentice to a tinsmith, painter, mechanic, welder, manager in a brick factory, and dock worker.",
            bornDate: '04-26-1900',
            deceaseDate: '07-26-1942',
            shortname: 'Arlt',

        },
        {
            id: 'auth_1',
            name: 'Adolfo Bioy Casares',
            brief: "Adolfo Vicente Perfecto Bioy Casares (1914-1999) was born in Buenos Aires, the child of wealthy parents. He began to write in the early Thirties, and his stories appeared in the influential magazine Sur, through which he met his wife, the painter and writer Silvina Ocampo, as well Jorge Luis Borges, who was to become his mentor, friend, and collaborator. In 1940, after writing several novice works, Bioy published the novella The Invention of Morel, the first of his books to satisfy him, and the first in which he hit his characteristic note of uncanny and unexpectedly harrowing humor. Later publications include stories and novels, among them A Plan for Escape, A Dream of Heroes, and Asleep in the Sun. Bioy also collaborated with Borges on an Anthology of Fantastic Literature and a series of satirical sketches written under the pseudonym of H. Bustos Domecq.",
            bornDate: '08-15-1914',
            deceaseDate: '03-08-1999',
            shortname: 'Bioy Casares',
        },
        {
            id: 'auth_2',
            name: 'Jorge Luis Borges',
            brief: "Jorge Francisco Isidoro Luis Borges Acevedo, usually referred to as Jorge Luis Borges (Spanish pronunciation: [xoɾxe lwis boɾxes]), was an Argentine writer and poet born in Buenos Aires. In 1914, his family moved to Switzerland where he attended school and traveled to Spain. On his return to Argentina in 1921, Borges began publishing his poems and essays in Surrealist literary journals. He also worked as a librarian and public lecturer. Borges was fluent in several languages. He was a target of political persecution during the Peron regime, and supported the military juntas that overthrew it. Due to a hereditary condition, Borges became blind in his late fifties. In 1955, he was appointed director of the National Public Library (Biblioteca Nacional) and professor of Literature at the University of Buenos Aires. In 1961, he came to international attention when he received the first International Publishers' Prize Prix Formentor. His work was translated and published widely in the United States and in Europe. He died in Geneva, Switzerland, in 1986. J. M. Coetzee said of Borges: He, more than anyone, renovated the language of fiction and thus opened the way to a remarkable generation of Spanish American novelists.",
            bornDate: '08-24-1899',
            deceaseDate: '06-14-1986',
            shortname: 'Borges',

        },
        {
            id: 'auth_3',
            name: 'Julio Cortázar',
            brief: "Julio Cortázar, born Julio Florencio Cortázar Descotte, was an Argentine author of novels and short stories. He influenced an entire generation of Latin American writers from Mexico to Argentina, and most of his best-known work was written in France, where he established himself in 1951.",
            bornDate: '26-08-1914',
            deceaseDate: '02-12-1984',
            shortname: 'Cortazar',

        },
        {
            id: 'auth_4',
            name: 'Silvina Ocampo',
            brief: "Silvina Ocampo Aguirre (July 28, 1903 - December 14, 1993) was an Argentine poet and short-fiction writer. Ocampo was born in Buenos Aires, the youngest of the six children of Manuel Ocampo and Ramona Aguirre. She was educated at home by tutors. One of her sisters was Victoria Ocampo, the publisher of the literarily important Argentine magazine Sur. She studied drawing in Paris under Giorgio de Chirico. She was married to Adolfo Bioy Casares, whose lover she became (1933) when Bioy was 19. They were married in 1940. In 1954 she adopted Bioy’s daughter with another woman, Marta Bioy Ocampo (1954-94)who was killed in an automobile accident just three weeks after Silvina Ocampo’s death.",
            bornDate: '07-28-1903',
            deceaseDate: '12-14-1993',
            shortname: 'Ocampo',

        },
        {
            id: 'auth_5',
            name: 'Ricardo Piglia',
            brief: 'Ricardo Piglia is one of the foremost contemporary Argentine writers, known equally for his fiction (several collections of short stories; the novels "Artificial Respiration", 1980; "The Absent City", 1992; "Money to Burn", 1997) and his criticism (1986 "Criticism and Fiction", 1999 "Brief Forms", 2005 "The Last Reader".',
            bornDate: '11-24-1941',
            deceaseDate: '01-06-2017',
            shortname: 'Piglia',

        },
        {
            id: 'auth_6',
            name: 'Manuel Puig',
            brief: 'Manuel Puig (born Juan Manuel Puig Delledonne) was an Argentinian author. Among his best known novels are La traición de Rita Hayworth (1968) (Betrayed by Rita Hayworth), Boquitas pintadas (1969) (Heartbreak Tango), and El beso de la mujer araña (1976) (Kiss of the Spider Woman), which was made into a film by the Argentine-Brazilian Director, Héctor Babenco and in 1993 into a Broadway musical.',
            bornDate: '12-28-1932',
            deceaseDate: '07-22-1990',
            shortname: 'Puig',

        },
        {
            id: 'auth_7',
            name: 'Ernesto Sabato',
            brief: "Ernesto Sabato was an Argentine writer, painter and physicist. According to the BBC he won some of the most prestigious prizes in Hispanic literature and became very influential in the literary world throughout Latin America. Upon his death El País dubbed him the last classic writer in Argentine literature.",
            bornDate: '06-24-1911',
            deceaseDate: '04-30-2011',
            shortname: 'Sabato',

        },

    ],
    books: [
        {
            id: 'book_0',
            authorId: 'auth_0',
            name: 'The Seven Crazy',
            publishDate: '10-01-1929',
            brief: "Remo Erdosain's Buenos Aires is a dim, seething, paranoid hive of hustlers and whores, scoundrels and madmen, and Erdosain feels his soul is as polluted as anything in this dingy city. Possessed by the directionlessness of the society around him, trapped between spiritual anguish and madness, he clings to anything that can give his life meaning: small-time defrauding of his employers, hatred of his wife's cousin Gregorio Barsut, a part in the Astrologer's plans for a new world order... but is that enough? Or is the only appropriate response to reality - insanity?",
            genre: 'Fiction',
            score: 3.89,
        },
        {
            id: 'book_1',
            authorId: 'auth_1',
            name: 'The Invention Of Morel',
            publishDate: '01-01-1940',
            brief: "Inspired by Bioy Casares's fascination with the movie star Louise Brooks, The Invention of Morel has gone on to live a secret life of its own. Greatly admired by Julio Cortázar, Gabriel García Márquez, and Octavio Paz, the novella helped to usher in Latin American fiction's now famous postwar boom. As the model for Alain Resnais and Alain Robbe-Grillet's Last Year in Marienbad, it also changed the history of film.",
            genre: 'Fiction, Science Fiction',
            score: 4.04,
        },
        {
            id: 'book_2',
            authorId: 'auth_2',
            name: 'The Aleph',
            publishDate: '01-01-1949',
            brief: "In Borges' story, the Aleph is a point in space that contains all other points. Anyone who gazes into it can see everything in the universe from every angle simultaneously, without distortion, overlapping or confusion. The story continues the theme of infinity found in several of Borges' other works, such as The Book of Sand.",
            genre: 'Fiction',
            score: 4.36,
        },
        {
            id: 'book_3',
            authorId: 'auth_2',
            name: 'Fictions',
            publishDate: '01-01-1944',
            brief: "The seventeen pieces in Ficciones demonstrate the whirlwind of Borges's genius and mirror the precision and potency of his intellect and inventiveness, his piercing irony, his skepticism, and his obsession with fantasy. Borges sends us on a journey into a compelling, bizarre, and profoundly resonant realm; we enter the fearful sphere of Pascal's abyss, the surreal and literal labyrinth of books, and the iconography of eternal return. To enter the worlds in Ficciones is to enter the mind of Jorge Luis Borges, wherein lies Heaven, Hell, and everything else in between.",
            genre: 'Fiction',
            score: 4.43,
        },
        {
            id: 'book_4',
            authorId: 'auth_3',
            name: 'Hopscotch',
            publishDate: '01-01-1963',
            brief: "Horacio Oliveira is an Argentinian writer who lives in Paris with his mistress, La Maga, surrounded by a loose-knit circle of bohemian friends who call themselves 'the Club.' A child's death and La Maga's disappearance put an end to his life of empty pleasures and intellectual acrobatics, and prompt Oliveira to return to Buenos Aires, where he works by turns as a salesman, a keeper of a circus cat which can truly count, and an attendant in an insane asylum. Hopscotch is the dazzling, freewheeling account of Oliveira's astonishing adventures.",
            genre: 'Fiction',
            score: 4.22,
        },
        {
            id: 'book_5',
            authorId: 'auth_4',
            name: 'Fury and other Stories',
            publishDate: '01-01-1959',
            brief: "La furia is the third book of short stories by Argentine writer Silvina Ocampo, published by the publisher Sur in 1959. It was the only one of Silvina's books that required an almost immediate reissue (which would take place in 1960). Silvina Ocampo chose the name of this work, a compendium of her stories, on the express recommendation of a faithful friend, Jorge Luis Borges, ruling out other possible ones, such as 'The Golden Hare' (name of the first story in the volume) and 'In Buenos Aires'.",
            genre: 'Fiction',
            score: 4.19,
        },
        {
            id: 'book_6',
            authorId: 'auth_5',
            name: 'Money to Burn',
            publishDate: '01-01-1997',
            brief: "Based on original reports and witness statements, Money to Burn tells the story of a gang of bandits who, fancying themselves as urban guerrillas, raided a bank in downtown Buenos Aires. They escaped with millions in cash but six weeks later found their hideout surrounded by three hundred military police, journalists and TV cameras. The subsequent siege and its shocking outcome have become a Latin American legend.",
            genre: 'Fiction',
            score: 3.77,
        },
        {
            id: 'book_7',
            authorId: 'auth_6',
            name: 'Kiss of the Spider Woman',
            publishDate: '01-01-1976',
            brief: "Sometimes they talk all night long. In the still darkness of their cell, Molina re-weaves the glittering and fragile stories of the film he loves, and the cynical Valentin listens. Valentin believes in the just cause which makes all suffering bearable; Molina believes in the magic of love which makes all else endurable. Each has always been alone, and always - especially now - in danger of betrayal. But in cell 7 each surrenders to the other something of himself that he has never surrendered before.",
            genre: 'Fiction',
            score: 4.00,
        },
        {
            id: 'book_8',
            authorId: 'auth_7',
            name: 'On Heroes and Tombs',
            publishDate: '01-01-1961',
            brief: "Nineteen-year-old Martín Castillo is a boy from Buenos Aires trying to find his path in life. He meets and falls in love with Alejandra Vidal Olmos, who with her father Fernando represents the 'old', post-colonial and autochthonous Argentina, which is seen mutating amid a strange and unsettling 'new' world. The novel gives an evocative portrait of the city of Buenos Aires and its people.",
            genre: 'Fiction',
            score: 4.27,
        },
        {
            id: 'book_9',
            authorId: 'auth_7',
            name: 'The Tunnel',
            publishDate: '01-01-1948',
            brief: "Infamous for the murder of Maria Iribarne, the artist Juan Pablo Castel is now writing a detailed account of his relationship with the victim from his prison cell: obsessed from the first moment he saw her examining one of his paintings, Castel had become fixated on her over the next months and fantasized over how they might meet again. When he happened upon her one day, a relationship was formed which swiftly convinced him of their mutual love. But Castel's growing paranoia would lead him to destroy the one thing he truly cared about.",
            genre: 'Fiction',
            score: 4.27,
        },


    ]
}

export const getBooksByAuthorId = (authorId: string): Book[] => {
    return database.books.filter(book => book.authorId === authorId);
};

export const getAuthorsById = (id: string) => {
    return database.authors.filter(author => author.id === id);
};

export const sortByPublishDate = (collection: Book[]) => {
    return collection.sort((a, b) => {
        const dateA = new Date(a.publishDate);
        const dateB = new Date(b.publishDate);
        if (dateA > dateB) {
            return 1;
        }
        if (dateA < dateB) {
            return -1;
        }
        return 0;
    });
}