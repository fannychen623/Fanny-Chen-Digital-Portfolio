// import package and local style sheet
import React from 'react';

import {
  Box, Grid, GridItem, SimpleGrid, 
  Button, Link, Text, Image,
  List, ListItem, ListIcon, Heading,
} from '@chakra-ui/react'

import {
  BiMoviePlay, BiRestaurant, BiCoffee,
  BiLinkExternal, BiLogoGithub, BiTerminal,
} from "react-icons/bi";

import '../styles/shareAByte.css';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
  return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../assets/shareAByte'), false, /\.(png|jpe?g|svg)$/);

const icons = { BiRestaurant, BiTerminal, BiCoffee };

export default function ShareAByte() {

  return (
    <Box className="shareAByte">
      <Grid
        h='100%'
        w='95%'
        ml='1rem'
        templateRows='auto'
        templateColumns='repeat(10, 1fr)'
        gap={10}
      >
        <GridItem rowSpan={1} colSpan={7} h='fit-content'>
          <Image src={images[`main.png`]} alt='main.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} px='2rem' bg='var(--semiTrans)' >
          <Heading>Create, save, and share unique recipes.</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRestaurant`]} />
              <Text fontSize='2xl'>Save recipes and upload photos of the dish.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRestaurant`]} />
              <Text fontSize='2xl'>Use AI (OpenAI API) to generate random recipe from a list of ingredients.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRestaurant`]} />
              <Text fontSize='2xl'>View recipes from other users on interactive recipe book page.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRestaurant`]} />
              <Text fontSize='2xl'>Favorite recipes to add it to personal list.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRestaurant`]} />
              <Text fontSize='2xl'>Quickly search for recipes via search page. </Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={1} colSpan={10} px='2rem' bg='var(--semiTrans)' alignSelf='center'>
          <Heading>Tools</Heading>
          <SimpleGrid columns={4} spacing={10}>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Node.js</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Express</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Handlebars</Text>
              </ListItem>
            </List>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>OpenAI API</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>CRUD / REST API</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Heroku (Deployment)</Text>
              </ListItem>
            </List>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>MySQL / Sequelize</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Bcrypt</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Bulma (CSS Framework)</Text>
              </ListItem>
            </List>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Javascript FileReader</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>MVC Paradigm</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Base64 Images</Text>
              </ListItem>
            </List>
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={10} pb='2rem'>
            <Link as='a' target="_blank" href={'https://share-a-byte.herokuapp.com/'}>
              <Button leftIcon={<BiLinkExternal />} >
                Visit Website
              </Button>
            </Link>
            <Link as='a' target="_blank" href={'https://drive.google.com/file/d/1vQD8mk_XY0VCUSZ8B1Cpv1rNpRRtxcTD/view?usp=sharing'}>
              <Button leftIcon={<BiMoviePlay />} >
                Watch Video
              </Button>
            </Link>
            <Link as='a' target="_blank" href={'https://github.com/fannychen623/Project-02-Recipe-Book'}>
              <Button leftIcon={<BiLogoGithub />}>
                View Repository
              </Button>
            </Link>
          </SimpleGrid>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5} >
          <Image src={images[`catalogPage.png`]} alt='catalogPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} alignSelf='center' px='2rem' bg='var(--semiTrans)'>
          <Heading color='var(--brown4)' pb='1rem'>Browse Recipes</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Flip through interactive recipe book catalog.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>See recipe owner and number of favorites.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Click on recipe to view more details.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5}>
          <Image src={images[`searchPage.png`]} alt='searchPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} px='2rem' bg='var(--semiTrans)'>
          <Heading color='var(--brown4)' pb='1rem'>Search Recipes</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Scroll through all recipes via gallery style.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Search for recipe by keywords.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>View popularity by favorite count.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Click to navigate to specific recipe for details.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5}>
          <Image src={images[`recipePage.png`]} alt='recipePage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} px='2rem' bg='var(--semiTrans)'>
          <Heading color='var(--brown4)' pb='1rem'>View Recipe</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>View recipe details (creator, ingredients, instructions, favorites).</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Click on the star to add recipe to favorites.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Recipe owner have the option to modify recipe.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5}>
          <Image src={images[`newRecipe.png`]} alt='newRecipe.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} px='2rem' bg='var(--semiTrans)'>
          <Heading color='var(--brown4)' pb='1rem'>New Recipe</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Add new recipe by entering recipe name, ingredients, and instructions.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Upload corresponding image of the recipe.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Optional selection of food icons to choose from if no image was provide.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5} h='fit-content'>
          <Image src={images[`randomRecipe.png`]} alt='randomRecipe.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} px='2rem' bg='var(--semiTrans)'>
          <Heading color='var(--brown4)' pb='1rem'>Random AI Recipe</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Clear out left over ingredients.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Enter a list of ingredients to get a random recipe generated by AI.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Modify recipe to liking and save.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Give the recipe a unique name or use the name generated by AI.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Update recipe with an image after saving and making the recipe.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5}>
          <Image src={images[`myRecipePage.png`]} alt='myRecipePage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} px='2rem' bg='var(--semiTrans)'>
          <Heading color='var(--brown4)' pb='1rem'>My Recipes</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>View all recipes that you created.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Update or remove recipes.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Create new recipes manually or with AI.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5}>
          <Image src={images[`myFavoritesPage.png`]} alt='myFavoritesPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} px='2rem' bg='var(--semiTrans)'>
          <Heading color='var(--brown4)' pb='1rem'>Favorite Recipes</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>View all the favorited recipes.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiCoffee`]} />
              <Text fontSize='2xl'>Click to navigate to recipe details.</Text>
            </ListItem>
          </List>
        </GridItem>
      </Grid>
    </Box>
  );
}