// project lists to map and render

const mainProjects = [
  {
    title: 'Step It Up',
    summary: 'A web application where users can create, track, and share their workout routines.',
    features: [
      'Create an account to keep track of progess.',
      'Create/update profile to calculate maintanence calorie.',
      'Create/remove custom workout routines.',
      'Add/update daily routine(s), weight, and calorie on a calendar.',
      'View/track progress over specific date ranges.',
      'Share progress, routine(s), and/or thoughts in posts.',
      'View, like, and comment on other user\'s posts.',
      'Browse through a list of Spotify workout playlists.'
    ],
    icon: 'BiDumbbell',
    thumbnail: 'stepItUp/main.png',
    images: [
      'stepItUp/homePage.png',
      'stepItUp/calendarPage.png',
      'stepItUp/trackerPage.png',
      'stepItUp/myRoutinesPage.png',
      'stepItUp/blogPage.png',
      'stepItUp/playlistsPage.png',
      'stepItUp/profilePage.png',
      'stepItUp/login.png',
      'stepItUp/signup.png',
      'stepItUp/addProfile.png',
      'stepItUp/createRoutine1.png',
      'stepItUp/createRoutine2.png',
      'stepItUp/createPost.png',
    ],
    video: 'stepItUp/stepItUp.mov',
    repository: 'https://github.com/analisegiobbi3/Step_IT_Up',
  },
  {
    title: 'Share A Byte',
    summary: 'A web application where users can create and share unique recipes.',
    features: [
      'Create and account for personal record keeping',
      'View/navigate through recipes on an interactive recipe book style catalog page',
      'View/search recipes based on keyterms on a search page.',
      'Navigate to a specific recipe to view details and like/favorite the recipe.',
      'Create your own recipes and upload a corresponding image or select from a default list of icons.',
      'Used AI to create a random recipe from an input list of ingredients',
      'View/update/remove your own recipes',
      'View/remove from a list of your favorite recipes',
    ],
    icon: 'BiRestaurant',
    thumbnail: 'shareAByte/main.png',
    images: [
      'shareAByte/main.png',
      'shareAByte/catalogPage.png',
      'shareAByte/searchPage.png',
      'shareAByte/myRecipePage.png',
      'shareAByte/myFavoritesPage.png',
      'shareAByte/recipePage.png',
      'shareAByte/login.png',
      'shareAByte/signup.png',
      'shareAByte/newRecipe.png',
      'shareAByte/randomRecipe.png',
    ],
    video: 'shareAByte/shareAByte.mov',
    repository: 'https://github.com/fannychen623/Project-02-Recipe-Book',
  },
  {
    title: 'GIF Me MARVEL',
    summary: 'A web application where users can lookup information and browse through GIFs of MARVEL characters.',
    features: [
      'Search for specific MARVEL characters.',
      'Navigate to a characters official MARVEL page.',
      'Favorite and Unfavorite GIFs.',
      'Re-access favorite GIFs that are stored in local storage.',
    ],
    icon: 'BiRocket',
    thumbnail: 'gifMeMarvel/main.png',
    images: [
      'gifMeMarvel/main.png',
      'gifMeMarvel/characterPage.png',
      'gifMeMarvel/favoriteGif.png',
      'gifMeMarvel/myFavoritesPage.png',
      'gifMeMarvel/removeFavorite.png',
      'gifMeMarvel/loadingPage1.png',
      'gifMeMarvel/loadingPage2.png',
    ],
    video: 'gifMeMarvel/gifMeMarvel.mov',
    repository: 'https://github.com/mshaari/gif-me-marvel',
  },
];

export default mainProjects;
