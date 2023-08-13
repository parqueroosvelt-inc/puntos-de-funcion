import javascript from '../assets/javascript.png'
import ensamblador from '../assets/ensamblador.png'
import cobol from '../assets/cobol.png'
import php from '../assets/php.png'
import java from '../assets/java.png'
import visualbasic from '../assets/visualbasic.png'
import cplusplus from '../assets/cplusplus.png'
import python from '../assets/python.png'

export const LANGUAGE_VARIATIONS = [
    {
        id: 'type-ensamblador',
        title: 'Ensamblador',
        averagePF: 25,
        languages: 
        [
            {
                id: 'programming-assembly',
                name: "Ensamblador",
                icon: ensamblador
            },
        ]
    },
    {
        id: 'type-cobol',
        title: 'COBOL',
        averagePF: 15,
        languages: 
        [
            {
                id: 'programming-cobol',
                name: "COBOL",
                icon: cobol
            },
        ]
    },
    {
        id: 'type-3GL-4GL',
        title: 'Lenguajes 3G y 4G',
        averagePF: 8,
        languages: [
            {
                id: 'programming-java',
                name: "Java",
                icon: java
            },
            {
                id: 'programming-c++',
                name: "C++",
                icon: cplusplus
            },
            {
                id: 'programming-vb',
                name: "Visual Basic",
                icon: visualbasic
            },
            {
                id: 'programming-php',
                name: "PHP",
                icon: php
            },
            {
                id: 'programming-js',
                name: "JavaScript",
                icon: javascript
            },
            {
                id: 'programming-py',
                name: "Python",
                icon: python
            },
        ]
    }
]