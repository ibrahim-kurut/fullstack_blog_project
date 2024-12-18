const posts = [
    {
        "id": 1,
        "username": "kenan kurut",
        "category_name": "css",
        "comments": [
            {
                "id": 1,
                "username": "yaman kurut",
                "content": "nice",
                "created_at": "2024-12-18T09:02:52.830039Z",
                "post": 1
            }
        ],
        "likes_count": 1,
        "title": "learn css",
        "content": "this is test content this is test content this is test content this is test content this is test content this is test content",
        "image": "https://media.geeksforgeeks.org/wp-content/uploads/20241209162056150919/CSS-Tutorial.webp",
        "created_at": "2024-12-18T09:02:26.070855Z",
        "updated_at": "2024-12-18T09:02:26.070855Z",
        "category": "frontend"
    },
    {
        "id": 2,
        "username": "lina farhat",
        "category_name": "javascript",
        "comments": [
            {
                "id": 2,
                "username": "mira khaled",
                "content": "great tutorial",
                "created_at": "2024-12-18T10:00:52.830039Z",
                "post": 2
            }
        ],
        "likes_count": 3,
        "title": "javascript basics",
        "content": "this is a javascript test content",
        "image": "https://beetekno.com/wp-content/uploads/2024/10/javascript.png",
        "created_at": "2024-12-18T09:50:26.070855Z",
        "updated_at": "2024-12-18T09:50:26.070855Z",
        "category": "frontend"
    },
    {
        "id": 3,
        "username": "omar khan",
        "category_name": "python",
        "comments": [
            {
                "id": 3,
                "username": "sara ali",
                "content": "very helpful",
                "created_at": "2024-12-18T11:15:52.830039Z",
                "post": 3
            }
        ],
        "likes_count": 5,
        "title": "python for beginners",
        "content": "this is python test content",
        "image": "https://i.ytimg.com/vi/m0LdKZ-prto/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDi_zXnPCEn12ZwUlCVKV1Kob0YQw",
        "created_at": "2024-12-18T10:20:26.070855Z",
        "updated_at": "2024-12-18T10:20:26.070855Z",
        "category": "backend"
    },
    {
        "id": 4,
        "username": "ali hassan",
        "category_name": "html",
        "comments": [
            {
                "id": 4,
                "username": "lina youssef",
                "content": "informative",
                "created_at": "2024-12-18T12:05:52.830039Z",
                "post": 4
            }
        ],
        "likes_count": 2,
        "title": "html introduction",
        "content": "this is html test content",
        "image": "https://www.cantech.in/blog/wp-content/uploads/2024/03/What-is-HTML-958x575.webp",
        "created_at": "2024-12-18T11:00:26.070855Z",
        "updated_at": "2024-12-18T11:00:26.070855Z",
        "category": "frontend"
    },
    {
        "id": 5,
        "username": "zain malik",
        "category_name": "react",
        "comments": [
            {
                "id": 5,
                "username": "karim morsi",
                "content": "awesome work",
                "created_at": "2024-12-18T13:30:52.830039Z",
                "post": 5
            }
        ],
        "likes_count": 4,
        "title": "react components",
        "content": "this is react test content",
        "image": "https://www.tercihyazilim.com/Upload/8292/Images/react-nedir-2.jpg?width=1024",
        "created_at": "2024-12-18T12:15:26.070855Z",
        "updated_at": "2024-12-18T12:15:26.070855Z",
        "category": "frontend"
    },
    {
        "id": 6,
        "username": "maya amir",
        "category_name": "nodejs",
        "comments": [
            {
                "id": 6,
                "username": "salma ahmed",
                "content": "loved it",
                "created_at": "2024-12-18T14:45:52.830039Z",
                "post": 6
            }
        ],
        "likes_count": 6,
        "title": "nodejs basics",
        "content": "this is nodejs test content",
        "image": "https://media.geeksforgeeks.org/wp-content/uploads/20241016105256460477/NodeJS-Tutorial.webp",
        "created_at": "2024-12-18T13:40:26.070855Z",
        "updated_at": "2024-12-18T13:40:26.070855Z",
        "category": "backend"
    }
];

export default posts