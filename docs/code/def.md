définitions
classe : Une classe en JavaScript est un modèle de code qui permet de créer des objets avec des propriétés et des méthodes communes. Elle est généralement déclarée avec le mot-clé `class`. Les classes en JavaScript permettent une programmation orientée objet plus facile et plus structurée, en facilitant la réutilisabilité et la maintenance du code. Les objets créés à partir d'une classe peuvent être personnalisés avec des propriétés et des méthodes spécifiques à chacun.
*****************************************************************
Un objet en JavaScript est une entité autonome qui possède des propriétés et des types . Il peut être créé en utilisant des classes ou des objets littéraux et peut contenir des variables et des fonctions qui peuvent être appelées et manipulées. Les objets en JavaScript permettent un dynamisme important et une grande flexibilité dans la manipulation des données et des comportements .
*****************************************************************
Objet instancié signifie qu'un objet a été créé à partir d'une classe en utilisant le processus d'instanciation. L'instanciation est le processus de création d'un objet à partir d'une classe. La classe fournit le design et les propriétés et méthodes que l'objet aura, et une fois instancié, l'objet peut être utilisé pour stocker des données et effectuer des actions en utilisant les méthodes fournies par la classe. L'objet instancié est donc une instance unique d'une classe particulière.
*****************************************************************
que signifie ce code ? 
class ExempleClass {
    paramater1 = ""
    constructor(parameter: string) { this.paramater1 = parameter }
}

Ce code est du TypeScript. Il définit une classe ExempleClass avec un membre paramater1 initialisé à une chaîne vide, ainsi qu'un constructeur qui prend un paramètre de type string. Lorsque la classe est instanciée, le paramètre est utilisé pour initialiser la propriété paramater1. Cette classe pourrait être utilisée comme suit :
const exemple = new ExempleClass("Hello world!");
console.log(exemple.paramater1); // affichera "Hello world!"
<!-- Lorsqu'un objet de la classe ExempleClass est instancié, la propriété paramater1 est initialisée avec la valeur fournie lors de la création de l'objet. Cela permet à l'objet d'avoir une valeur pour cette propriété dès sa création. -->


