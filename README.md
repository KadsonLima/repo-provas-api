
## Install

    npm install

## Run the app

    npm start or npm run dev

# RepoProvas API 


### SignUp

```http
POST /sign-up
```

#### Request:


| Body               | Type       | Description                       |
| :------------------| :--------- | :---------------------------------|
| `name`             | `string`   | **Required**.    name             |
| `email`            | `string`   | **Required**.    email            |
| `password`         | `string`   | **Required**.    password         |
| `confirm_password` | `string`   | **Required**.    confirm_password |



</br>

#### Response:

```
	Status:201 Created

```

### SignIn

```http
POST /sign-in
```

#### Request:

| Body   	         | Type       | Description                     |
|:-----------------|:-----------|:--------------------------------|
| `email`          | `string`   | **Required**.    email          |
| `password`       | `string`   | **Required**.    password       |

</br>

#### Response:

```json
	Status:200
{
  "token": ""
}
```
### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

**All following routes request authorization header**

<br/>

### Create Test

```http
POST /tests/
```

#### Request:

| Body   	        | Type       | Description                     |
|:-----------------	|:-----------|:--------------------------------|
| `name`       		| `string`   | **Required**.    name           |
| `pdfUrl`       	| `string`   | **Required**.    pdfUrl 	       |
| `categoryId`          | `string`   | **Required**.    categoryId     |
| `teacherId`           | `string`   | **Required**.    teacherId      |
| `disciplineId`        | `string`   | **Required**.    disciplineId   |

</br>

#### Response:

```json
{	
  "id": 2,
  "name": "is required",
  "pdfUrl": "https://github.com/KadsonLima",
  "categoryId": 1,
  "teacherDisciplineId": 2,
  "createdAt": "2022-09-19T20:41:22.205Z"

}
```

### Find All Tests

```http
GET /tests/
```


</br>

#### Response:

```json
[
  {
    "id": 1,
    "teacher": {
      "name": "Diego Pinho"
    },
    "disciplines": {
      "name": "HTML e CSS"
    },
    "Tests": []
  },
  {
    "id": 2,
    "teacher": {
      "name": "Diego Pinho"
    },
    "disciplines": {
      "name": "JavaScript"
    },
    "Tests": [
      {
        "id": 1,
        "name": "is required",
        "pdfUrl": "https://github.com/KadsonLima",
        "category": {
          "id": 1,
          "name": "Projeto"
        }
      },
      {
        "id": 2,
        "name": "is required",
        "pdfUrl": "https://github.com/KadsonLima",
        "category": {
          "id": 1,
          "name": "Projeto"
        }
      }
    ]
  },
  {
    "id": 3,
    "teacher": {
      "name": "Diego Pinho"
    },
    "disciplines": {
      "name": "React"
    },
    "Tests": []
  },
  {
    "id": 4,
    "teacher": {
      "name": "Bruna Hamori"
    },
    "disciplines": {
      "name": "Humildade"
    },
    "Tests": []
  },
  {
    "id": 5,
    "teacher": {
      "name": "Bruna Hamori"
    },
    "disciplines": {
      "name": "Planejamento"
    },
    "Tests": []
  },
  {
    "id": 6,
    "teacher": {
      "name": "Bruna Hamori"
    },
    "disciplines": {
      "name": "Autoconfiança"
    },
    "Tests": []
  }
]
```


#### Get for Categories

```http
GET /categories
```

#### Response:

```json
[
  {
    "id": 1,
    "number": 1,
    "Disciplines": [
      {
        "id": 1,
        "name": "HTML e CSS",
        "TeacherDisciplines": [
          {
            "disciplines": {
              "name": "HTML e CSS"
            },
            "teacher": {
              "name": "Diego Pinho"
            },
            "Tests": []
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "number": 2,
    "Disciplines": [
      {
        "id": 2,
        "name": "JavaScript",
        "TeacherDisciplines": [
          {
            "disciplines": {
              "name": "JavaScript"
            },
            "teacher": {
              "name": "Diego Pinho"
            },
            "Tests": [
              {
                "id": 1,
                "name": "is required",
                "pdfUrl": "https://github.com/KadsonLima",
                "createdAt": "2022-09-19T20:35:45.988Z",
                "category": {
                  "id": 1,
                  "name": "Projeto"
                }
              },
              {
                "id": 2,
                "name": "is required",
                "pdfUrl": "https://github.com/KadsonLima",
                "createdAt": "2022-09-19T20:41:22.205Z",
                "category": {
                  "id": 1,
                  "name": "Projeto"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "number": 3,
    "Disciplines": [
      {
        "id": 3,
        "name": "React",
        "TeacherDisciplines": [
          {
            "disciplines": {
              "name": "React"
            },
            "teacher": {
              "name": "Diego Pinho"
            },
            "Tests": []
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "number": 4,
    "Disciplines": [
      {
        "id": 4,
        "name": "Humildade",
        "TeacherDisciplines": [
          {
            "disciplines": {
              "name": "Humildade"
            },
            "teacher": {
              "name": "Bruna Hamori"
            },
            "Tests": []
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "number": 5,
    "Disciplines": [
      {
        "id": 5,
        "name": "Planejamento",
        "TeacherDisciplines": [
          {
            "disciplines": {
              "name": "Planejamento"
            },
            "teacher": {
              "name": "Bruna Hamori"
            },
            "Tests": []
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "number": 6,
    "Disciplines": [
      {
        "id": 6,
        "name": "Autoconfiança",
        "TeacherDisciplines": [
          {
            "disciplines": {
              "name": "Autoconfiança"
            },
            "teacher": {
              "name": "Bruna Hamori"
            },
            "Tests": []
          }
        ]
      }
    ]
  }
]
```


<br/>
