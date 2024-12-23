const quizData = [
        {
            "question": "Quelle déclaration de variable est valide ?",
            "options": [
                {
                    "text": "`var hello: Int? = \"\"`",
                    "correct": false
                },
                {
                    "text": "`String \"hello\" = hello`",
                    "correct": false
                },
                {
                    "text": "`val hello = \"hello\"`",
                    "correct": true
                },
                {
                    "text": "`hello: String = \"hello\"`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Pour déclarer une variable qui ne changera pas, il est préférable d'utiliser `var` plutôt que `val`.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelles méthodes permettent de mettre à jour une variable ?",
            "options": [
                {
                    "text": "`total++`",
                    "correct": true
                },
                {
                    "text": "`total - 1`",
                    "correct": false
                },
                {
                    "text": "`total--`",
                    "correct": true
                },
                {
                    "text": "`total = total + 1`",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "En langage Kotlin, les commentaires peuvent être composés d'une seule ou de plusieurs lignes et sont ignorés par le compilateur.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel élément n'est pas un type de données en Kotlin ?",
            "options": [
                {
                    "text": "`String`",
                    "correct": false
                },
                {
                    "text": "`Decimal`",
                    "correct": true
                },
                {
                    "text": "`Int`",
                    "correct": false
                },
                {
                    "text": "`Boolean`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "`Float` représente également une valeur décimale, mais est moins précis que `Double`.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "En langage Kotlin, le point d'entrée d'un programme est l'/la ___.",
            "options": [
                {
                    "text": "instruction `println()`",
                    "correct": false
                },
                {
                    "text": "variable `val`",
                    "correct": false
                },
                {
                    "text": "fonction `main()`",
                    "correct": true
                },
                {
                    "text": "instruction `return`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelles affirmations concernant les valeurs renvoyées par une fonction sont vraies ?",
            "options": [
                {
                    "text": "S'il n'est pas indiqué par une fonction, le type renvoyé est `Unit`.",
                    "correct": true
                },
                {
                    "text": "Une valeur renvoyée peut être stockée dans une variable.",
                    "correct": true
                },
                {
                    "text": "Les fonctions avec un type renvoyé `Unit` doivent inclure une instruction `return`.",
                    "correct": false
                },
                {
                    "text": "Une valeur renvoyée doit être du même type que celui renvoyé par une fonction.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Quelles affirmations concernant les fonctions sont vraies ?",
            "options": [
                {
                    "text": "Les fonctions acceptent des paramètres ou des variables en tant qu'entrées.",
                    "correct": true
                },
                {
                    "text": "Les paramètres de fonction doivent avoir des arguments par défaut.",
                    "correct": false
                },
                {
                    "text": "Lorsque vous appelez une fonction avec des paramètres, les valeurs transmises sont appelées \"arguments\".",
                    "correct": true
                },
                {
                    "text": "Diviser votre code en fonctions distinctes facilite sa gestion.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Les arguments nommés vous permettent de modifier l'ordre dans lequel vous transmettez les arguments à une fonction.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Que signifie IDE ?",
            "options": [
                {
                    "text": "Integrated Development Environment",
                    "correct": true
                },
                {
                    "text": "Independent Design Environment",
                    "correct": false
                },
                {
                    "text": "Ideal Developer Environment",
                    "correct": false
                },
                {
                    "text": "Intelligent Design Environment",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quels sont les avantages d'Android Studio ?",
            "options": [
                {
                    "text": "Il permet d'éviter les fautes de frappe et les autres erreurs figurant dans votre code.",
                    "correct": true
                },
                {
                    "text": "Il est fourni avec un appareil virtuel (appelé émulateur) capable d'exécuter votre application.",
                    "correct": true
                },
                {
                    "text": "Il peut vous montrer un aperçu en temps réel de l'aspect de votre application à l'écran pendant que vous codez.",
                    "correct": true
                },
                {
                    "text": "Il peut traduire automatiquement votre application dans d'autres langues.",
                    "correct": false
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Quel est l'intérêt d'utiliser un appareil virtuel (ou émulateur) dans Android Studio ?",
            "options": [
                {
                    "text": "Pour afficher divers messages d'erreur aux utilisateurs",
                    "correct": false
                },
                {
                    "text": "Pour tester le code de l'application de manière sécurisée",
                    "correct": false
                },
                {
                    "text": "Pour tester votre application sur un appareil sans disposer de cet appareil physique",
                    "correct": true
                },
                {
                    "text": "Pour voir à quoi ressemble votre application dans un navigateur Web",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "À quoi sert un modèle de projet dans Android Studio ?",
            "options": [
                {
                    "text": "Il permet à Android Studio de télécharger les fichiers plus rapidement.",
                    "correct": false
                },
                {
                    "text": "Il permet de créer plus rapidement une application.",
                    "correct": true
                },
                {
                    "text": "Il offre une structure conforme aux bonnes pratiques.",
                    "correct": true
                },
                {
                    "text": "C'est le seul moyen de créer des applications que vous pouvez prévisualiser dans Android Studio.",
                    "correct": false
                },
                {
                    "text": "Il permet de réduire les risques d'erreur lors de la création d'une application en préremplissant le projet avec du code d'application.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Comment créer un projet dans Android Studio ?",
            "options": [
                {
                    "text": "A. Déconnectez-vous d'Android Studio, puis accédez au dossier de votre projet pour savoir comment procéder.",
                    "correct": false
                },
                {
                    "text": "B. Si vous avez déjà ouvert un projet, sélectionnez Fichier > Nouveau > Nouveau projet dans le menu Android Studio.",
                    "correct": false
                },
                {
                    "text": "C. Dans la fenêtre Bienvenue dans Android Studio, cliquez sur Démarrer un nouveau projet Android Studio.",
                    "correct": false
                },
                {
                    "text": "D. Créez un fichier sur votre ordinateur et nommez-le \"Nouveau projet Android Studio\".",
                    "correct": false
                },
                {
                    "text": "B et C permettent de créer un projet dans Android Studio.",
                    "correct": true
                },
                {
                    "text": "Aucune des réponses ci-dessus",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "___ est une fonction permettant de définir une mise en page dans votre application à l'aide de fonctions modulables.",
            "options": [
                {
                    "text": "`ComponentActivity()`",
                    "correct": false
                },
                {
                    "text": "`onCreate()`",
                    "correct": false
                },
                {
                    "text": "`DefaultPreview()`",
                    "correct": false
                },
                {
                    "text": "`setContent()`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Une fonction Compose nécessite l'annotation @Composable.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Un ___ est un composable avec une couleur d'arrière-plan qui peut contenir d'autres composables.",
            "options": [
                {
                    "text": "Color",
                    "correct": false
                },
                {
                    "text": "Container",
                    "correct": false
                },
                {
                    "text": "Surface",
                    "correct": true
                },
                {
                    "text": "Box",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "La marge intérieure est un exemple d'/de ___",
            "options": [
                {
                    "text": "propriété",
                    "correct": false
                },
                {
                    "text": "composable",
                    "correct": false
                },
                {
                    "text": "attribut",
                    "correct": false
                },
                {
                    "text": "modificateur",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle affirmation concernant Compose est fausse ?",
            "options": [
                {
                    "text": "Le modèle Activité Compose vide permet de créer une application simple.",
                    "correct": false
                },
                {
                    "text": "Vous pouvez afficher les mises en page dans la fenêtre d'aperçu, sans exécuter votre application.",
                    "correct": false
                },
                {
                    "text": "Tous les éléments et thèmes d'une application Compose sont contenus dans une surface.",
                    "correct": true
                },
                {
                    "text": "Les thèmes, tels que `GreetingCardTheme`, vous permettent de définir le style des composables.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Qu'est-ce que Jetpack Compose ?",
            "options": [
                {
                    "text": "Un kit d'outils modernes pour développer des interfaces utilisateur Android",
                    "correct": true
                },
                {
                    "text": "Un kit d'outils pour concevoir des bibliothèques",
                    "correct": false
                },
                {
                    "text": "Une interface de base de données",
                    "correct": false
                },
                {
                    "text": "Un plug-in de développement d'APK",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Les fonctions modulables sont les éléments de base de Compose.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel élément permet d'annoter une fonction composable ?",
            "options": [
                {
                    "text": "`@Annotation`",
                    "correct": false
                },
                {
                    "text": "`@ComposableFunction`",
                    "correct": false
                },
                {
                    "text": "`@Composable`",
                    "correct": true
                },
                {
                    "text": "`@Preview`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Dans Compose, les éléments de mise en page de base sont :",
            "options": [
                {
                    "text": "Column",
                    "correct": true
                },
                {
                    "text": "Row",
                    "correct": true
                },
                {
                    "text": "Text",
                    "correct": false
                },
                {
                    "text": "Box",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Quelle fenêtre d'outil permet d'importer, de créer, de gérer et d'utiliser des ressources dans votre application ?",
            "options": [
                {
                    "text": "Gestionnaire d'applications",
                    "correct": false
                },
                {
                    "text": "Resource Manager",
                    "correct": true
                },
                {
                    "text": "Outil de ressources",
                    "correct": false
                },
                {
                    "text": "Gestionnaire de mises en page",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle classe est générée automatiquement par Android et contient les ID de toutes les ressources du projet ?",
            "options": [
                {
                    "text": "La classe `Android`",
                    "correct": false
                },
                {
                    "text": "La classe `Resource`",
                    "correct": false
                },
                {
                    "text": "La classe `R`",
                    "correct": true
                },
                {
                    "text": "La classe `ResourceID`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle fonction permet de charger une ressource d'image drawable ?",
            "options": [
                {
                    "text": "La fonction `stringResource()`",
                    "correct": false
                },
                {
                    "text": "La fonction `painterResource()`",
                    "correct": true
                },
                {
                    "text": "La fonction `ImageResource()`",
                    "correct": false
                },
                {
                    "text": "La fonction `loadResource()`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel paramètre de fonction sert à ajouter un texte d'accessibilité, utilisé par TalkBack ?",
            "options": [
                {
                    "text": "`accessibilityText`",
                    "correct": false
                },
                {
                    "text": "`contentText`",
                    "correct": false
                },
                {
                    "text": "`accessibilityDescription`",
                    "correct": false
                },
                {
                    "text": "`contentDescription`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La mise en page Box empile les éléments d'interface utilisateur les uns sur les autres.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel paramètre permet d'aligner l'élément enfant avec le début du parent ?",
            "options": [
                {
                    "text": "`Alignment.End`",
                    "correct": false
                },
                {
                    "text": "`Alignment.Begin`",
                    "correct": false
                },
                {
                    "text": "`Alignment.Start`",
                    "correct": true
                },
                {
                    "text": "`Alignment.Top`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le code suivant affichera \"Divisible by 5\" si number est égal à 25.",
            "options": [
                {
                    "text": "`true`",
                    "correct": false
                },
                {
                    "text": "`false`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les conditions suivantes, lesquelles sont remplies lorsque `x = 5` ?",
            "options": [
                {
                    "text": "`x == 5`",
                    "correct": true
                },
                {
                    "text": "`x in 1..5`",
                    "correct": true
                },
                {
                    "text": "`x is Int`",
                    "correct": true
                },
                {
                    "text": "`x % 5`",
                    "correct": false
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Parmi les propositions suivantes, laquelle n'est pas un concept de base de la programmation orientée objet ?",
            "options": [
                {
                    "text": "Abstraction",
                    "correct": false
                },
                {
                    "text": "Lisibilité",
                    "correct": true
                },
                {
                    "text": "Héritage",
                    "correct": false
                },
                {
                    "text": "Polymorphisme",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quels sont les quatre modificateurs de visibilité en Kotlin ?",
            "options": [
                {
                    "text": "`public`, `private`, `protected`, `abstract`",
                    "correct": false
                },
                {
                    "text": "`static`, `override`, `internal`, `external`",
                    "correct": false
                },
                {
                    "text": "`private`, `protected`, `public`, `internal`",
                    "correct": true
                },
                {
                    "text": "`public`, `protected`, `static`, `internal`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le mot clé ___ est utilisé pour appeler une méthode à partir de la classe parent.",
            "options": [
                {
                    "text": "`this`",
                    "correct": false
                },
                {
                    "text": "`super`",
                    "correct": true
                },
                {
                    "text": "`parent`",
                    "correct": false
                },
                {
                    "text": "`self`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Un(e) ___ définit les propriétés ou les méthodes devant être implémentées par une classe.",
            "options": [
                {
                    "text": "délégué",
                    "correct": false
                },
                {
                    "text": "type générique",
                    "correct": false
                },
                {
                    "text": "interface",
                    "correct": true
                },
                {
                    "text": "sous-classe",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les éléments suivants, lequel est le mieux représenté par un type nullable ?",
            "options": [
                {
                    "text": "Le nombre de followers (zéro ou plus) dans une application de réseaux sociaux.",
                    "correct": false
                },
                {
                    "text": "Une photo de profil facultative.",
                    "correct": true
                },
                {
                    "text": "Un nom d'utilisateur devant comporter au moins un caractère.",
                    "correct": false
                },
                {
                    "text": "Un identifiant unique attribué à chaque utilisateur.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "L'opérateur ___ vous permet d'appeler une méthode uniquement si l'objet n'est pas nul.",
            "options": [
                {
                    "text": "`.`",
                    "correct": false
                },
                {
                    "text": "`!!`",
                    "correct": false
                },
                {
                    "text": "`?:`",
                    "correct": false
                },
                {
                    "text": "`?.`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant les fonctions Kotlin, laquelle est fausse ?",
            "options": [
                {
                    "text": "Une fonction peut être remplacée par un autre type de données, et inversement.",
                    "correct": true
                },
                {
                    "text": "Une fonction peut être renvoyée à partir d'une autre fonction.",
                    "correct": false
                },
                {
                    "text": "Une fonction peut en utiliser une autre en tant que paramètre.",
                    "correct": false
                },
                {
                    "text": "Une fonction possède un type de données, tel que `(Int) -> Unit`.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Un littéral de fonction est un autre nom pour désigner ___",
            "options": [
                {
                    "text": "un type de fonction",
                    "correct": false
                },
                {
                    "text": "une expression lambda",
                    "correct": true
                },
                {
                    "text": "une référence de fonction",
                    "correct": false
                },
                {
                    "text": "une lambda finale",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Utilisez un composable ___ pour afficher une image.",
            "options": [
                {
                    "text": "Button",
                    "correct": false
                },
                {
                    "text": "Text",
                    "correct": false
                },
                {
                    "text": "Image",
                    "correct": true
                },
                {
                    "text": "Icon",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "`Alignment.Center` centre les composants de l'interface utilisateur horizontalement et verticalement.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Les fonctions modulables peuvent stocker un objet en mémoire à l'aide du composable ___.",
            "options": [
                {
                    "text": "remember",
                    "correct": true
                },
                {
                    "text": "Column",
                    "correct": false
                },
                {
                    "text": "Modifier",
                    "correct": false
                },
                {
                    "text": "@Composable",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le débogueur vous permet d'inspecter les variables lorsque l'exécution du code a été suspendue.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "En utilisant des valeurs ___ dans une fonction modulable, vous pouvez transformer les variables en objets observables qui planifient une recomposition lorsque leur valeur change.",
            "options": [
                {
                    "text": "remember",
                    "correct": false
                },
                {
                    "text": "Modifier",
                    "correct": false
                },
                {
                    "text": "@Composable",
                    "correct": false
                },
                {
                    "text": "mutableStateOf",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Le composable ___ place ses enfants dans une séquence verticale.",
            "options": [
                {
                    "text": "Row",
                    "correct": false
                },
                {
                    "text": "Box",
                    "correct": false
                },
                {
                    "text": "Column",
                    "correct": true
                },
                {
                    "text": "Modifier",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "La fonctionnalité de débogueur ___ vous permet de remonter dans la pile d'appel.",
            "options": [
                {
                    "text": "Passer",
                    "correct": false
                },
                {
                    "text": "Sortir",
                    "correct": true
                },
                {
                    "text": "Entrer",
                    "correct": false
                },
                {
                    "text": "Reprendre le programme",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Lorsque Jetpack Compose exécute vos composables pour la première fois lors du/de la ___, il suit les composables que vous appelez pour décrire votre UI.",
            "options": [
                {
                    "text": "composition initiale",
                    "correct": true
                },
                {
                    "text": "recomposition",
                    "correct": false
                },
                {
                    "text": "changement d'état",
                    "correct": false
                },
                {
                    "text": "fermeture de l'application",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le seul moyen de modifier une composition est la recomposition.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le/La ___ désigne le moment où Jetpack Compose réexécute les composables qui ont pu changer en réponse à des modifications de données.",
            "options": [
                {
                    "text": "composition initiale",
                    "correct": false
                },
                {
                    "text": "recomposition",
                    "correct": true
                },
                {
                    "text": "changement d'état",
                    "correct": false
                },
                {
                    "text": "fermeture de l'application",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Dans une application, l'/le/la ___ correspond à toute valeur susceptible de changer au fil du temps.",
            "options": [
                {
                    "text": "état",
                    "correct": true
                },
                {
                    "text": "valeur",
                    "correct": false
                },
                {
                    "text": "valueChange",
                    "correct": false
                },
                {
                    "text": "StateValue",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le/La ___ est un modèle qui consiste à faire remonter un état pour obtenir un composant sans état.",
            "options": [
                {
                    "text": "changement d'état",
                    "correct": false
                },
                {
                    "text": "hissage d'état",
                    "correct": true
                },
                {
                    "text": "composition de hissage",
                    "correct": false
                },
                {
                    "text": "recomposition",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle propriété `KeyboardAction` permet de déplacer le curseur vers le composable suivant ?",
            "options": [
                {
                    "text": "`onDone`",
                    "correct": false
                },
                {
                    "text": "`onNext`",
                    "correct": true
                },
                {
                    "text": "`onGo`",
                    "correct": false
                },
                {
                    "text": "`onSend`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle fonction Kotlin permet d'arrondir une valeur de type float ou double ?",
            "options": [
                {
                    "text": "`kotlin.math.ceilUp()`",
                    "correct": false
                },
                {
                    "text": "`kotlin.math.ceil()`",
                    "correct": true
                },
                {
                    "text": "`kotlin.math.roundDown()`",
                    "correct": false
                },
                {
                    "text": "`kotlin.math.roundUp()`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "L'outil d'inspection de la mise en page, disponible dans Jetpack Compose, permet d'inspecter une mise en page Compose dans une application en cours d'exécution sur un émulateur ou un appareil physique.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Les tests de l'interface utilisateur sont enregistrés dans le répertoire ___.",
            "options": [
                {
                    "text": "main",
                    "correct": false
                },
                {
                    "text": "androidTest",
                    "correct": true
                },
                {
                    "text": "test",
                    "correct": false
                },
                {
                    "text": "res",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Les tests locaux et les tests de l'interface utilisateur doivent être annotés avec l'annotation ___.",
            "options": [
                {
                    "text": "`@VisibleForTesting`",
                    "correct": false
                },
                {
                    "text": "`@Preview`",
                    "correct": false
                },
                {
                    "text": "`@Test`",
                    "correct": true
                },
                {
                    "text": "`@Composable`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les propositions suivantes, laquelle permet de définir une classe de données en Kotlin ?",
            "options": [
                {
                    "text": "`data class Person(val name: String, val age: Int)`",
                    "correct": true
                },
                {
                    "text": "`class Person(val name: String, val age: Int): data`",
                    "correct": false
                },
                {
                    "text": "`class Person(val name: String, val age: Int)`",
                    "correct": false
                },
                {
                    "text": "`data class Person{val name: String, val age: Int}`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Lorsque vous utilisez une classe scellée, toutes les sous-classes directes doivent se trouver dans le même package.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Lorsque vous utilisez des génériques, le type de données \"générique\" est inclus dans ___.",
            "options": [
                {
                    "text": "`[]`",
                    "correct": false
                },
                {
                    "text": "`{}`",
                    "correct": false
                },
                {
                    "text": "`()`",
                    "correct": false
                },
                {
                    "text": "`<>`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Une classe ___ est utile lorsque vous possédez un ensemble fixe de valeurs.",
            "options": [
                {
                    "text": "enum",
                    "correct": true
                },
                {
                    "text": "scellée",
                    "correct": false
                },
                {
                    "text": "de données",
                    "correct": false
                },
                {
                    "text": "héritée",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Pour créer un objet de liste capable de modifier sa taille, vous devez appeler ___.",
            "options": [
                {
                    "text": "`modifiableListOf()`",
                    "correct": false
                },
                {
                    "text": "`immutableListOf()`",
                    "correct": false
                },
                {
                    "text": "`listOf()`",
                    "correct": false
                },
                {
                    "text": "`mutableListOf()`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les propositions suivantes, lesquelles sont des fonctions d'ordre supérieur ?",
            "options": [
                {
                    "text": "`map`",
                    "correct": true
                },
                {
                    "text": "`arrangeBy`",
                    "correct": false
                },
                {
                    "text": "`filter`",
                    "correct": true
                },
                {
                    "text": "`forEach`",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Compte tenu de la ligne de code suivante et parmi les commandes proposées, laquelle permettra d'imprimer Blue ? (Conseil : En cas de doute, essayez d'exécuter le code en Kotlin Playground.)",
            "options": [
                {
                    "text": "`println(colors[2])`",
                    "correct": true
                },
                {
                    "text": "`println(colors.get(2))`",
                    "correct": true
                },
                {
                    "text": "`println(colors.contains(2))`",
                    "correct": false
                },
                {
                    "text": "`println(colors.getOrDefaultValue(index = 2, defaultValue = 10))`",
                    "correct": false
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Le concept de programmation d'une classe comportant une seule instance est appelé \"___\".",
            "options": [
                {
                    "text": "unicité",
                    "correct": false
                },
                {
                    "text": "singleton",
                    "correct": true
                },
                {
                    "text": "objet unique",
                    "correct": false
                },
                {
                    "text": "lambda",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant les ensembles et les cartes, laquelle est vraie ?",
            "options": [
                {
                    "text": "Un ensemble doit contenir des valeurs distinctes et les clés d'une carte doivent être distinctes.",
                    "correct": true
                },
                {
                    "text": "Un ensemble doit contenir des valeurs distinctes et les clés d'une carte peuvent contenir des doublons.",
                    "correct": false
                },
                {
                    "text": "Un ensemble peut contenir des valeurs en double, les valeurs d'une carte également.",
                    "correct": false
                },
                {
                    "text": "Un ensemble peut contenir des valeurs en double et les clés d'une carte doivent être distinctes.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Si vous disposez d'une variable nommée `records`, qui est une collection, vous pouvez appeler ___ afin de déterminer le nombre d'éléments qu'elle contient.",
            "options": [
                {
                    "text": "`records.length`",
                    "correct": false
                },
                {
                    "text": "`records.quantity`",
                    "correct": false
                },
                {
                    "text": "`len(records)`",
                    "correct": false
                },
                {
                    "text": "`records.size`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Les icônes de lanceur adaptatives des applications Android se composent d'un drawable vectoriel de premier plan et d'arrière-plan.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel composable permet de créer une liste déroulante avec un nombre variable d'éléments ?",
            "options": [
                {
                    "text": "`Column`",
                    "correct": false
                },
                {
                    "text": "`Row`",
                    "correct": false
                },
                {
                    "text": "`LazyColumn`",
                    "correct": true
                },
                {
                    "text": "`Card`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel type de fichier est utilisé pour les vecteurs de premier plan et d'arrière-plan de l'icône de lanceur ?",
            "options": [
                {
                    "text": ".txt",
                    "correct": false
                },
                {
                    "text": ".jpg",
                    "correct": false
                },
                {
                    "text": ".png",
                    "correct": false
                },
                {
                    "text": ".xml",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel composable permet de créer une grille à défilement vertical avec un nombre indéterminé d'éléments ?",
            "options": [
                {
                    "text": "`LazyColumn`",
                    "correct": false
                },
                {
                    "text": "`LazyVerticalGrid`",
                    "correct": true
                },
                {
                    "text": "`LazyHorizontalGrid`",
                    "correct": false
                },
                {
                    "text": "`Row`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le composable `Column` n'est pas une bonne option pour une liste d'éléments de longueur inconnue, car ___.",
            "options": [
                {
                    "text": "il ne peut contenir qu'un nombre limité d'éléments prédéfinis.",
                    "correct": true
                },
                {
                    "text": "il organise les éléments verticalement.",
                    "correct": false
                },
                {
                    "text": "il active le défilement par défaut, sans code supplémentaire.",
                    "correct": false
                },
                {
                    "text": "il peut ajouter du contenu à la demande.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "La méthode ___ permet d'ajouter du contenu à un composable LazyColumn.",
            "options": [
                {
                    "text": "`painterResource()`",
                    "correct": false
                },
                {
                    "text": "`Modifier.padding()`",
                    "correct": false
                },
                {
                    "text": "`items()`",
                    "correct": true
                },
                {
                    "text": "`onCreate()`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel composable organise les éléments horizontalement ?",
            "options": [
                {
                    "text": "`Column`",
                    "correct": false
                },
                {
                    "text": "`Card`",
                    "correct": false
                },
                {
                    "text": "`Image`",
                    "correct": false
                },
                {
                    "text": "`Row`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel composable organise les éléments verticalement ?",
            "options": [
                {
                    "text": "`Column`",
                    "correct": true
                },
                {
                    "text": "`Card`",
                    "correct": false
                },
                {
                    "text": "`Image`",
                    "correct": false
                },
                {
                    "text": "`Row`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "En ajoutant des animations dans votre application Android, vous pouvez :",
            "options": [
                {
                    "text": "Indiquer visuellement ce qui se passe dans votre application.",
                    "correct": false
                },
                {
                    "text": "Donner une apparence soignée à votre application.",
                    "correct": false
                },
                {
                    "text": "Signaler des modifications.",
                    "correct": false
                },
                {
                    "text": "Toutes les réponses ci-dessus",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "L'animation du ressort est basée sur :",
            "options": [
                {
                    "text": "Les valeurs de début et de fin sur la durée spécifiée.",
                    "correct": false
                },
                {
                    "text": "Le taux d'amortissement et la raideur.",
                    "correct": true
                },
                {
                    "text": "Les valeurs d'instantané spécifiées à différents horodatages.",
                    "correct": false
                },
                {
                    "text": "Une interpolation entre deux valeurs d'image clé.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "L'animation du ressort est basée sur le principe physique de la force de ressort.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Dans la thématisation Material, la couleur ___ correspond à la couleur la plus fréquente sur les écrans et dans les composants de votre application.",
            "options": [
                {
                    "text": "principale",
                    "correct": true
                },
                {
                    "text": "secondaire",
                    "correct": false
                },
                {
                    "text": "de surface",
                    "correct": false
                },
                {
                    "text": "d'arrière-plan",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le fichier suivant est utilisé pour définir les formes des composants dans Compose.",
            "options": [
                {
                    "text": "`Theme.kt`",
                    "correct": false
                },
                {
                    "text": "`Color.kt`",
                    "correct": false
                },
                {
                    "text": "`Shape.kt`",
                    "correct": true
                },
                {
                    "text": "`Colors.kt`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Vous ne pouvez avoir qu'un seul composable @Preview",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Un code couleur hexadécimal commence par le caractère dièse (#), suivi de six lettres et/ou chiffres représentant les composants rouge, vert et bleu (RVB) de cette couleur.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le fichier ___ contient toutes les informations sur le thème de l'application, lequel est défini par des couleurs, des formes et une typographie.",
            "options": [
                {
                    "text": "Theme.kt",
                    "correct": true
                },
                {
                    "text": "Color.kt",
                    "correct": false
                },
                {
                    "text": "Shape.kt",
                    "correct": false
                },
                {
                    "text": "Colors.kt",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "L'/Le/La ___ crée un contraste entre la fiche et l'arrière-plan en ajoutant une ombre qui rend l'application plus réaliste et plus attrayante.",
            "options": [
                {
                    "text": "élévation",
                    "correct": true
                },
                {
                    "text": "forme",
                    "correct": false
                },
                {
                    "text": "couleur",
                    "correct": false
                },
                {
                    "text": "thème",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quels sont les avantages du thème sombre ?",
            "options": [
                {
                    "text": "Il peut réduire considérablement la consommation d'énergie (selon la technologie d'écran de l'appareil).",
                    "correct": false
                },
                {
                    "text": "Il améliore la visibilité pour les utilisateurs souffrant d'une déficience visuelle et ceux sensibles à la lumière vive.",
                    "correct": false
                },
                {
                    "text": "Il permet à tous d'utiliser un appareil dans des conditions de faible luminosité.",
                    "correct": false
                },
                {
                    "text": "Toutes les réponses ci-dessus",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "TalkBack permet de naviguer dans une application en utilisant des contacteurs au lieu de l'écran tactile.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Quel attribut permet à TalkBack d'énoncer une description pertinente d'une image ou d'une icône ?",
            "options": [
                {
                    "text": "`elevation`",
                    "correct": false
                },
                {
                    "text": "`shape`",
                    "correct": false
                },
                {
                    "text": "`contentDescription`",
                    "correct": true
                },
                {
                    "text": "`style`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle méthode est appelée en premier lorsque l'application n'est plus active ?",
            "options": [
                {
                    "text": "onPause()",
                    "correct": true
                },
                {
                    "text": "onStart()",
                    "correct": false
                },
                {
                    "text": "onCreate()",
                    "correct": false
                },
                {
                    "text": "onStop()",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Après ___, l'application ne sera plus visible à l'écran.",
            "options": [
                {
                    "text": "onPause()",
                    "correct": false
                },
                {
                    "text": "onStart()",
                    "correct": false
                },
                {
                    "text": "onCreate()",
                    "correct": false
                },
                {
                    "text": "onStop()",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Utilisez ___ pour rédiger un message de débogage. Cette méthode nécessite deux arguments : la balise de journal et le message de journal.",
            "options": [
                {
                    "text": "`Log.i()`",
                    "correct": false
                },
                {
                    "text": "`Log.d()`",
                    "correct": true
                },
                {
                    "text": "`Log.e()`",
                    "correct": false
                },
                {
                    "text": "`Log.w()`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Pour enregistrer une valeur devant survivre à une modification de configuration, déclarez ses variables avec ___.",
            "options": [
                {
                    "text": "`MutableState{}`",
                    "correct": false
                },
                {
                    "text": "`rememberSaveable{}`",
                    "correct": true
                },
                {
                    "text": "`remember{}`",
                    "correct": false
                },
                {
                    "text": "Hissage d'état",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Selon le principe de conception de séparation des tâches, l'application doit être divisée en classes, chacune ayant des responsabilités distinctes.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "L'interface utilisateur correspond à ce que l'utilisateur voit, tandis que l'état de l'interface utilisateur correspond à ce qu'il devrait voir selon l'application.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Selon l'architecture d'application recommandée, chaque application doit au minimum comporter les deux couches suivantes :",
            "options": [
                {
                    "text": "Couches de domaine et de données",
                    "correct": false
                },
                {
                    "text": "Couches d'interface utilisateur et de données",
                    "correct": true
                },
                {
                    "text": "Couches de dépôt et d'interface utilisateur",
                    "correct": false
                },
                {
                    "text": "Couches de domaine et d'interface utilisateur",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "`StateFlow` est un flux observable de conteneur de données qui émet les mises à jour de l'état actuel et du nouvel état.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les configurations suivantes, laquelle doit être ajoutée au fichier `build.gradle` afin d'ajouter des dépendances au code source du test unitaire ?",
            "options": [
                {
                    "text": "`implementation`",
                    "correct": false
                },
                {
                    "text": "`testImplementation`",
                    "correct": true
                },
                {
                    "text": "`debugImplementation`",
                    "correct": false
                },
                {
                    "text": "`androidTestImplementation`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Les tests unitaires sont exécutés sur un émulateur ou un appareil Android.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Un itinéraire est défini avec un type de données ___.",
            "options": [
                {
                    "text": "Fonction `@Composable`",
                    "correct": false
                },
                {
                    "text": "`NavHost.Route`",
                    "correct": false
                },
                {
                    "text": "`String`",
                    "correct": true
                },
                {
                    "text": "`NavRoute`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Avec `NavHost`, vous devez explicitement spécifier un écran de démarrage.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Il est recommandé de ne pas transmettre un `NavHostController` à des composables individuels.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "___ est un composable qui gère l'écran qui s'affiche en fonction d'une route donnée.",
            "options": [
                {
                    "text": "`NavController`",
                    "correct": false
                },
                {
                    "text": "`NavHostController`",
                    "correct": false
                },
                {
                    "text": "`NavHost`",
                    "correct": true
                },
                {
                    "text": "`ComposableNavigator`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les paramètres suivants, quels sont les deux pris par la fonction `composable()` appelée dans un `NavHost` ?",
            "options": [
                {
                    "text": "Un contenu de destination et une route",
                    "correct": false
                },
                {
                    "text": "Une route et un contenu modulable",
                    "correct": true
                },
                {
                    "text": "Un chemin d'accès et un composable",
                    "correct": false
                },
                {
                    "text": "Un contenu modulable et un intent.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Vous pouvez modifier la route actuellement affichée à l'aide de la méthode ___.",
            "options": [
                {
                    "text": "`update()`",
                    "correct": false
                },
                {
                    "text": "`composable()`",
                    "correct": false
                },
                {
                    "text": "`transition()`",
                    "correct": false
                },
                {
                    "text": "`navigate()`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La méthode ___ permet de supprimer un ou plusieurs écrans de la pile \"Retour\".",
            "options": [
                {
                    "text": "`popToStartDestination()`",
                    "correct": false
                },
                {
                    "text": "`popBackStack()`",
                    "correct": true
                },
                {
                    "text": "`popComposable()`",
                    "correct": false
                },
                {
                    "text": "`popToBackStack()`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Dans une application multi-écran, le fait d'accéder à un nouvel écran place celui-ci au bas de la pile \"Retour\".",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "L'intent ___ contient des données supplémentaires transmises à un intent.",
            "options": [
                {
                    "text": "arguments",
                    "correct": false
                },
                {
                    "text": "extras",
                    "correct": true
                },
                {
                    "text": "parameters",
                    "correct": false
                },
                {
                    "text": "properties",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "`StateFlow` est un flux observable de conteneur de données qui émet les mises à jour de l'état actuel et du nouvel état.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant les boutons \"Retour\" et \"Haut\", lesquelles sont vraies ?",
            "options": [
                {
                    "text": "Le bouton \"Retour\" est un bouton système.",
                    "correct": true
                },
                {
                    "text": "Le bouton \"Haut\" est fourni par le système en bas de l'écran.",
                    "correct": false
                },
                {
                    "text": "Le bouton \"Retour\" fait partie de l'`AppBar`",
                    "correct": false
                },
                {
                    "text": "Le bouton \"Haut\" de l'`AppBar` permet de revenir automatiquement à l'écran précédent.",
                    "correct": false
                },
                {
                    "text": "Le bouton \"Retour\" ne s'affiche que si vous utilisez la navigation.",
                    "correct": false
                },
                {
                    "text": "Le bouton \"Haut\" peut être affiché ou masqué selon l'écran actuel.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Le composable ___ est utilisé pour répondre au bouton \"Retour\", avec ou sans `NavHost`.",
            "options": [
                {
                    "text": "`BackButton`",
                    "correct": false
                },
                {
                    "text": "`BackHandler`",
                    "correct": true
                },
                {
                    "text": "`BackNavigator`",
                    "correct": false
                },
                {
                    "text": "`BackStack`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant les écrans plus grands, lesquelles sont vraies ?",
            "options": [
                {
                    "text": "Le positionnement des boutons est plus important sur les écrans plus grands.",
                    "correct": true
                },
                {
                    "text": "Il n'est généralement pas nécessaire de modifier la mise en page de l'interface utilisateur pour que l'application fonctionne bien sur les grands écrans.",
                    "correct": false
                },
                {
                    "text": "Ajouter une autre mise en page sur le même écran évite d'avoir à naviguer entre les écrans.",
                    "correct": true
                },
                {
                    "text": "Les mises en page pour grands écrans doivent éviter de regrouper les boutons les plus utilisés au centre de l'écran.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "___ est une mesure spécifique de la largeur ou de la hauteur, où la mise en page d'une application doit changer.",
            "options": [
                {
                    "text": "Une classe de fenêtre",
                    "correct": false
                },
                {
                    "text": "Un point de mise en page",
                    "correct": false
                },
                {
                    "text": "Un bucket de tailles",
                    "correct": false
                },
                {
                    "text": "Un point d'arrêt",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La classe de taille de fenêtre de largeur compacte fait généralement référence à des appareils plus petits, comme des téléphones en mode Portrait.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "L'API ___ simplifie l'implémentation des mises en page adaptatives.",
            "options": [
                {
                    "text": "`SizeClass`",
                    "correct": false
                },
                {
                    "text": "`WindowSizeState`",
                    "correct": false
                },
                {
                    "text": "`SizeBucket`",
                    "correct": false
                },
                {
                    "text": "`WindowSizeClass`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Un rail de navigation convient souvent aux mises en page de largeur ___.",
            "options": [
                {
                    "text": "compacte",
                    "correct": false
                },
                {
                    "text": "standard",
                    "correct": false
                },
                {
                    "text": "moyenne",
                    "correct": true
                },
                {
                    "text": "agrandie",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Lorsque vous créez des applications avec des mises en page adaptatives, vous ne devez utiliser qu'un seul aperçu pour chaque écran.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La mise en page \"list-detail\" nécessite un retour en arrière sur les écrans de petit format, mais pas sur ceux affichant simultanément la liste et les écrans détaillés.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Supposons que vous ayez une application de contacts qui affiche une liste de contacts et dispose d'informations complémentaires à afficher pour chaque contact. Comment faire pour adapter l'interface utilisateur à différentes tailles d'écran ?",
            "options": [
                {
                    "text": "Utilisez la mise en page \"list-detail\" pour afficher un ou deux volets côte à côte en fonction de la largeur d'écran disponible.",
                    "correct": true
                },
                {
                    "text": "Les éléments de la liste doivent occuper toute la largeur de l'écran, indépendamment de sa largeur.",
                    "correct": false
                },
                {
                    "text": "Le bouton \"Haut\" doit toujours s'afficher dans l'application. Tout clic sur ce bouton doit permettre de quitter l'application.",
                    "correct": false
                },
                {
                    "text": "Lorsque vous faites pivoter l'appareil, l'élément sélectionné dans la liste (et les informations correspondantes qui s'affichent) doit être réinitialisé pour devenir le premier élément de la liste.",
                    "correct": false
                },
                {
                    "text": "Il est nécessaire d'utiliser le composant Navigation de Jetpack pour que l'interface utilisateur s'adapte à diverses tailles d'écran.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Vous pouvez configurer les tests pour qu'ils n'exécutent que des fonctions de test avec des annotations personnalisées en configurant ___.",
            "options": [
                {
                    "text": "le module",
                    "correct": false
                },
                {
                    "text": "le package",
                    "correct": false
                },
                {
                    "text": "la classe Instrumentation",
                    "correct": false
                },
                {
                    "text": "les arguments Instrumentation",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Avec la programmation simultanée, le code peut s'exécuter dans un ordre différent de celui dans lequel il a été écrit.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Complétez la phrase : Le thread ___ est chargé d'afficher l'interface utilisateur répondant aux entrées utilisateur.",
            "options": [
                {
                    "text": "principal",
                    "correct": false
                },
                {
                    "text": "principal",
                    "correct": false
                },
                {
                    "text": "principal",
                    "correct": true
                },
                {
                    "text": "principal",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant les contextes de coroutine, lesquelles sont vraies ?",
            "options": [
                {
                    "text": "`Dispatchers.Default` est le meilleur choix pour les tâches de longue durée impliquant la lecture et l'écriture de grandes quantités de données.",
                    "correct": false
                },
                {
                    "text": "`Dispatchers.Main` peut être utilisé pour mettre à jour l'interface utilisateur, mais pas pour les tâches de longue durée.",
                    "correct": true
                },
                {
                    "text": "`Job` contrôle le cycle de vie d'une coroutine.",
                    "correct": true
                },
                {
                    "text": "`Dispatchers.IO` est optimisé pour les E/S réseau, entre autres tâches en arrière-plan.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "`launch()` et `async()` sont des fonctions d'extension de ___, qui effectue le suivi des coroutines qu'il crée.",
            "options": [
                {
                    "text": "`CoroutineScope`",
                    "correct": true
                },
                {
                    "text": "`Job`",
                    "correct": false
                },
                {
                    "text": "`Dispatcher`",
                    "correct": false
                },
                {
                    "text": "`CoroutineContext`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant la simultanéité structurée, lesquelles sont vraies ?",
            "options": [
                {
                    "text": "Si une coroutine est annulée, les coroutines enfants doivent également être annulées.",
                    "correct": true
                },
                {
                    "text": "Un champ d'application parent peut être terminé avant qu'un ou plusieurs de ses enfants ne le soient.",
                    "correct": false
                },
                {
                    "text": "Un échec doit se propager vers le bas sans annuler la coroutine parente.",
                    "correct": false
                },
                {
                    "text": "Les coroutines doivent être lancées à partir d'un champ d'application de coroutine.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Parmi les affirmations suivantes concernant les services Web, lesquelles sont vraies ?",
            "options": [
                {
                    "text": "GET, POST et DELETE sont tous des exemples d'opérations HTTP.",
                    "correct": true
                },
                {
                    "text": "Une URL est un type d'URI, mais tous les URI ne sont pas des URL.",
                    "correct": true
                },
                {
                    "text": "Les services RESTful fournissent toujours une réponse au format XML.",
                    "correct": false
                },
                {
                    "text": "Retrofit est une bibliothèque tierce qui permet de gérer JSON à partir d'un service Web.",
                    "correct": false
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Retrofit est une bibliothèque tierce qui permet à votre application d'envoyer des requêtes à un service Web ___.",
            "options": [
                {
                    "text": "XML",
                    "correct": false
                },
                {
                    "text": "Socket",
                    "correct": false
                },
                {
                    "text": "RESTful",
                    "correct": true
                },
                {
                    "text": "JSON",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Une méthode recommandée pour effectuer une requête réseau Retrofit consiste à lancer une coroutine dans viewModelScope.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Pour autoriser votre application à se connecter à Internet, ajoutez l'autorisation `android.permission.INTERNET` dans le fichier ___.",
            "options": [
                {
                    "text": "`MainActivity`",
                    "correct": false
                },
                {
                    "text": "`build.gradle`",
                    "correct": false
                },
                {
                    "text": "Fichier manifeste Android",
                    "correct": true
                },
                {
                    "text": "`ViewModel`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le processus qui consiste à transformer un résultat JSON en données utilisables, comme c'est le cas avec Gson, est appelé JSON ___.",
            "options": [
                {
                    "text": "Serialization",
                    "correct": false
                },
                {
                    "text": "Encoding",
                    "correct": false
                },
                {
                    "text": "Converting",
                    "correct": false
                },
                {
                    "text": "Parsing",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Laquelle de ces méthodes ou opérations HTTP n'est pas courante ?",
            "options": [
                {
                    "text": "GET",
                    "correct": false
                },
                {
                    "text": "Requêtes POST",
                    "correct": false
                },
                {
                    "text": "DELETE",
                    "correct": false
                },
                {
                    "text": "SET",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La réponse d'un service Web REST est couramment formatée dans l'un des formats de transfert de données courants tels que XML ou JSON.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant la bibliothèque Retrofit, laquelle est fausse ?",
            "options": [
                {
                    "text": "Il s'agit d'une bibliothèque cliente.",
                    "correct": false
                },
                {
                    "text": "Elle permet à votre application d'envoyer des requêtes à un service Web REST.",
                    "correct": false
                },
                {
                    "text": "Elle convertit les objets Kotlin en objets JSON.",
                    "correct": true
                },
                {
                    "text": "Il s'agit d'une bibliothèque tierce.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les propositions suivantes, laquelle s'applique à un modèle Singleton ?",
            "options": [
                {
                    "text": "Les déclarations `object` sont utilisées pour déclarer des objets singleton dans Kotlin.",
                    "correct": false
                },
                {
                    "text": "S'assure qu'une seule et unique instance d'un objet est créée",
                    "correct": false
                },
                {
                    "text": "Dispose d'un point d'accès global à cet objet.",
                    "correct": false
                },
                {
                    "text": "Toutes les réponses ci-dessus",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Chaque objet JSON contient les éléments suivants :",
            "options": [
                {
                    "text": "Un ensemble de paires clé-valeur séparées par le signe deux-points.",
                    "correct": false
                },
                {
                    "text": "Un ensemble de paires clé-valeur séparées par une virgule.",
                    "correct": true
                },
                {
                    "text": "Un ensemble de paires clé-valeur séparées par un point-virgule.",
                    "correct": false
                },
                {
                    "text": "Aucune des propositions ci-dessus",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Conformément aux consignes d'architecture recommandées pour Android, une application doit contenir les éléments suivants :",
            "options": [
                {
                    "text": "Une couche d'UI",
                    "correct": false
                },
                {
                    "text": "Une couche de domaine",
                    "correct": false
                },
                {
                    "text": "Une couche de données",
                    "correct": true
                },
                {
                    "text": "Une couche d'entreprise",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quels sont les avantages de l'injection de dépendances (DI) dans votre application ?",
            "options": [
                {
                    "text": "Aide à la réutilisation du code",
                    "correct": true
                },
                {
                    "text": "Facilite la refactorisation",
                    "correct": true
                },
                {
                    "text": "Aide avec les tests",
                    "correct": true
                },
                {
                    "text": "Rend votre application plus rapide",
                    "correct": false
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Si votre application comporte plusieurs types de sources de données, elles doivent toutes être stockées dans le même dépôt pour plus de simplicité.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les éléments suivants, lequel permet de remplacer le coordinateur `Main` par `TestDispatcher` dans un test unitaire local ?",
            "options": [
                {
                    "text": "`runTest`",
                    "correct": false
                },
                {
                    "text": "`runBlocking`",
                    "correct": false
                },
                {
                    "text": "`Distpatchers.resetMain()`",
                    "correct": false
                },
                {
                    "text": "`Dispatchers.setMain()`",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La fonction `runTest()` peut être utilisée pour tester les fonctions `suspend`.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant les bases de données relationnelles et SQLite, lesquelles sont vraies ?",
            "options": [
                {
                    "text": "Le référencement de la clé primaire d'une table dans une autre vous permet de modéliser les relations entre les tables.",
                    "correct": true
                },
                {
                    "text": "Une base de données SQLite est composée de colonnes, elles-mêmes composées de tables et de lignes.",
                    "correct": false
                },
                {
                    "text": "Chaque table de données doit comporter au moins une clé étrangère.",
                    "correct": false
                },
                {
                    "text": "Les lignes contiennent les éléments individuels de la base de données.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Il est facultatif de terminer une instruction SQL par un point-virgule.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Si vous souhaitez calculer la somme de toutes les valeurs d'une colonne de base de données, qu'utilisez-vous ?",
            "options": [
                {
                    "text": "Une fonction d'agrégation",
                    "correct": true
                },
                {
                    "text": "`WHERE clause`",
                    "correct": false
                },
                {
                    "text": "Un mot clé `DISTINCT`",
                    "correct": false
                },
                {
                    "text": "Une clause `LIMIT`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle instruction SELECT renvoie le nombre d'adresses e-mail uniques des messages dans le dossier de spam ?",
            "options": [
                {
                    "text": "`SELECT COUNT(DISTINCT folder) FROM email WHERE spam != sender;`",
                    "correct": false
                },
                {
                    "text": "`SELECT DISTINCT COUNT(sender) FROM email WHERE folder = 'spam';`",
                    "correct": false
                },
                {
                    "text": "`SELECT COUNT(DISTINCT sender) FROM email WHERE folder = 'spam';`",
                    "correct": true
                },
                {
                    "text": "`SELECT DISTINCT COUNT('spam') FROM email WHERE sender = folder;`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "L'instruction SQL `SELECT * FROM contacts WHERE name LIKE '%Milton'` renvoie toutes les lignes dont la valeur de la colonne \"name\" commence par `Milton`.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant `GROUP BY` et `ORDER BY`, lesquelles sont vraies ?",
            "options": [
                {
                    "text": "La clause `ORDER BY` précède la clause `GROUP BY`.",
                    "correct": false
                },
                {
                    "text": "Dans une clause `ORDER BY`, l'ordre décroissant est sélectionné par défaut.",
                    "correct": true
                },
                {
                    "text": "Si une requête contient une clause `GROUP BY`, elle remplace la clause `ORDER BY`.",
                    "correct": false
                },
                {
                    "text": "Les clauses `ORDER BY` et `GROUP BY` peuvent toutes deux accepter plusieurs colonnes.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "La condition `WHERE NOT read = false` et la condition `WHERE read != true` sont équivalentes.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La clause `LIMIT` `LIMIT 30 SKIP 60` renvoie :",
            "options": [
                {
                    "text": "60 lignes",
                    "correct": false
                },
                {
                    "text": "Les lignes 31 à 60",
                    "correct": false
                },
                {
                    "text": "Les lignes 61 à 90",
                    "correct": true
                },
                {
                    "text": "90 lignes",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Une instruction `UPDATE` utilise une clause ___ pour attribuer des valeurs aux colonnes.",
            "options": [
                {
                    "text": "`WHERE`",
                    "correct": false
                },
                {
                    "text": "`SET`",
                    "correct": true
                },
                {
                    "text": "`ASSIGN`",
                    "correct": false
                },
                {
                    "text": "`LIKE`",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Les instructions `UPDATE` et `DELETE` peuvent inclure une clause WHERE et peuvent affecter plusieurs lignes.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant l'annotation `@Query`, laquelle est fausse ?",
            "options": [
                {
                    "text": "L'annotation `@Query` est utilisée avec une méthode dans la DAO.",
                    "correct": false
                },
                {
                    "text": "L'annotation `@Query` correspond à une requête `SELECT`.",
                    "correct": false
                },
                {
                    "text": "L'annotation `@Query` peut transmettre des arguments dans une instruction SQL en plaçant deux points avant son nom.",
                    "correct": false
                },
                {
                    "text": "L'annotation `@Query` ne peut être utilisée qu'avec une fonction de suspension.",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant la DAO, lesquelles sont vraies ?",
            "options": [
                {
                    "text": "Les fonctions DAO utilisent des annotations telles que `@Insert` et `@Update`, qui correspondent à une opération sur la base de données.",
                    "correct": false
                },
                {
                    "text": "Les fonctions DAO peuvent renvoyer un flux.",
                    "correct": false
                },
                {
                    "text": "Les instances de classes DAO sont référencées dans la classe `AppDatabase`.",
                    "correct": false
                },
                {
                    "text": "Toutes les réponses ci-dessus",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "La classe Database, héritant de la classe RoomDatabase, est chargée ___.",
            "options": [
                {
                    "text": "D'instancier la base de données et fournir l'accès au DAO",
                    "correct": true
                },
                {
                    "text": "De représenter des tables de données individuelles.",
                    "correct": false
                },
                {
                    "text": "De définir des fonctions correspondant aux instructions SQL, telles que les requêtes `SELECT`.",
                    "correct": false
                },
                {
                    "text": "De fournir des données à l'interface utilisateur.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Le DAO sert à :",
            "options": [
                {
                    "text": "Conserver la référence aux modèles de vues et à la base de données.",
                    "correct": false
                },
                {
                    "text": "Définir des fonctions correspondant aux instructions SQL, telles que les requêtes `SELECT` et `INSERT`.",
                    "correct": true
                },
                {
                    "text": "Fournir une méthode de fabrique pour créer une instance de base de données.",
                    "correct": false
                },
                {
                    "text": "Créer une instance de base de données.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Pourquoi devez-vous utiliser la fonction `synchronized()` lorsque vous créez la base de données ?",
            "options": [
                {
                    "text": "Elle vous permet de créer plusieurs copies de la base de données.",
                    "correct": false
                },
                {
                    "text": "Elle vous permet d'accéder simultanément et de manière sécurisée au code de plusieurs threads.",
                    "correct": true
                },
                {
                    "text": "Elle permet d'éviter les conditions de concurrence.",
                    "correct": true
                },
                {
                    "text": "Elle garantit qu'un seul thread à la fois peut entrer dans le bloc de code.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Vous pouvez utiliser les annotations `@Insert` et `@Delete` sans fournir d'instruction SQL.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },    
        {
            "question": "Complétez la phrase : Pour gérer les conflits pouvant survenir lors de l'insertion dans une base de données, vous pouvez transmettre un paramètre ___, tel que IGNORE, à l'annotation @Insert.",
            "options": [
                {
                    "text": "onConflict",
                    "correct": false
                },
                {
                    "text": "onConflict",
                    "correct": false
                },
                {
                    "text": "onConflict",
                    "correct": true
                },
                {
                    "text": "onConflict",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Sélectionnez toutes les affirmations vraies concernant l'outil d'inspecteur de bases de données :",
            "options": [
                {
                    "text": "Il vous permet d'inspecter, d'interroger et de modifier les bases de données de votre application pendant son exécution.",
                    "correct": true
                },
                {
                    "text": "Il fonctionne avec d'autres bibliothèques SQLite que vous intégrez à votre application.",
                    "correct": false
                },
                {
                    "text": "Il est particulièrement utile pour déboguer des bases de données.",
                    "correct": true
                },
                {
                    "text": "Il fonctionne avec SQLite standard et avec des bibliothèques basées sur SQLite, telles que Room.",
                    "correct": true
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Les entités représentent des tables de données individuelles dans la base de données Room.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Parmi les affirmations suivantes concernant la clé primaire, laquelle est fausse ?",
            "options": [
                {
                    "text": "Vous pouvez utiliser la clé primaire pour identifier de manière unique chaque enregistrement/entrée dans vos tables de la base de données.",
                    "correct": false
                },
                {
                    "text": "Une fois la clé primaire attribuée, vous ne pouvez plus la modifier.",
                    "correct": false
                },
                {
                    "text": "Room génère par défaut une valeur de clé primaire incrémentée pour chaque entité.",
                    "correct": true
                },
                {
                    "text": "La clé primaire représente l'objet de l'entité tant qu'il existe dans la base de données.",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Les implémentations de `DataStore` sont les suivantes :",
            "options": [
                {
                    "text": "Proto",
                    "correct": true
                },
                {
                    "text": "Preferences",
                    "correct": true
                },
                {
                    "text": "Room",
                    "correct": false
                },
                {
                    "text": "SQLite",
                    "correct": false
                }
            ],
            "type": "multiple"
        },
        {
            "question": "Preferences DataStore utilise un schéma prédéfini.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": false
                },
                {
                    "text": "Faux",
                    "correct": true
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle est la fonction fournie par DataStore pour modifier le DataStore ?",
            "options": [
                {
                    "text": "preferencesDataStore()",
                    "correct": false
                },
                {
                    "text": "updatePreferences()",
                    "correct": false
                },
                {
                    "text": "edit()",
                    "correct": true
                },
                {
                    "text": "map()",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Preferences DataStore utilise des clés pour accéder aux valeurs stockées.",
            "options": [
                {
                    "text": "Vrai",
                    "correct": true
                },
                {
                    "text": "Faux",
                    "correct": false
                }
            ],
            "type": "single"
        },
        {
            "question": "Quelle exception peut se produire lorsque vous tentez de lire les données d'un Preferences DataStore ?",
            "options": [
                {
                    "text": "IllegalArgumentException",
                    "correct": false
                },
                {
                    "text": "IOException",
                    "correct": true
                },
                {
                    "text": "IllegalStateException",
                    "correct": false
                },
                {
                    "text": "NumberFormatException",
                    "correct": false
                }
            ],
            "type": "single"
        },
    ];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptions = [];

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";
    selectedOptions = [];

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.innerText = option.text;
        optionElement.classList.add("option");
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });

    // Réinitialise les boutons
    document.getElementById("validate-btn").disabled = true;

    updateProgressIndicator();
}

function selectOption(index) {
    const currentQuestion = quizData[currentQuestionIndex];
    const optionsContainer = document.getElementById("options");
    
    if (currentQuestion.type === "single") {
        clearSelections();
        selectedOptions = [index];
    } else if (currentQuestion.type === "multiple") {
        if (selectedOptions.includes(index)) {
            selectedOptions = selectedOptions.filter((i) => i !== index);
        } else {
            selectedOptions.push(index);
        }
    }

    optionsContainer.children[index].classList.toggle("selected");
    document.getElementById("validate-btn").disabled = selectedOptions.length === 0;
}

function clearSelections() {
    const optionsContainer = document.getElementById("options");
    Array.from(optionsContainer.children).forEach((option) => {
        option.classList.remove("selected");
    });
}

function validateAnswer() {
    const currentQuestion = quizData[currentQuestionIndex];
    const optionsContainer = document.getElementById("options");

    // Désactiver les clics sur les options après validation
    Array.from(optionsContainer.children).forEach((option) => {
        option.onclick = null;
    });

    // Obtenir les indices des bonnes réponses
    const correctAnswers = currentQuestion.options
        .map((option, index) => (option.correct ? index : null))
        .filter((index) => index !== null);

    // Marquer toutes les bonnes réponses en vert
    correctAnswers.forEach((index) => {
        optionsContainer.children[index].classList.add("correct");
    });

    // Marquer les réponses incorrectes sélectionnées en rouge
    selectedOptions.forEach((index) => {
        if (!correctAnswers.includes(index)) {
            optionsContainer.children[index].classList.add("incorrect");
        }
    });

    // Calculer le score uniquement si toutes les réponses sélectionnées sont correctes
    if (
        selectedOptions.every((index) => correctAnswers.includes(index)) &&
        selectedOptions.length === correctAnswers.length
    ) {
        score++;
        updateScoreDisplay();
    }

    // Désactiver le bouton "Valider" et afficher "Question Suivante"
    document.getElementById("validate-btn").disabled = true;
    document.getElementById("next-btn").style.display = "block";
}

function updateScoreDisplay() {
    document.getElementById("current-score").innerText = score;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").innerText = `Votre score est de ${score} sur ${quizData.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("current-score").innerText = score;
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("result-container").classList.add("hidden");
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function updateProgressIndicator() {
    const progressIndicator = document.getElementById("progress-indicator");
    progressIndicator.innerText = `(${currentQuestionIndex + 1} / ${quizData.length})`;
}