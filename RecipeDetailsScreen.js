import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const recipesDetails = {
  'Penne pasta tomato': {
    ingredients: [
      '- 200g Penne pasta',
      '- 1 can tomato sauce',
      '- 1 clove garlic',
      '- 2 tbsp olive oil',
      '- Salt and pepper to taste'
    ],
    directions: [
      '1. Cook pasta according to package instructions.',
      '2. Heat olive oil in a pan, sauté garlic.',
      '3. Add tomato sauce, salt, and pepper.',
      '4. Mix in pasta and cook for 2-3 minutes.'
    ]
  },
  'Stuffed with chicken': {
    ingredients: [
      '- 4 boneless chicken breasts',
      '- 1/2 cup cream cheese',
      '- 1/4 cup spinach',
      '- Salt and pepper to taste'
    ],
    directions: [
      '1. Preheat oven to 375°F.',
      '2. Mix cream cheese and spinach.',
      '3. Cut slits in chicken, stuff with the mixture.',
      '4. Bake for 25-30 minutes.'
    ]
  },
  'Margherita Pizza': {
    ingredients: [
      '- 1 pizza dough',
      '- 1/2 cup tomato sauce',
      '- 200g mozzarella cheese',
      '- Fresh basil leaves'
    ],
    directions: [
      '1. Preheat oven to 475°F.',
      '2. Spread tomato sauce on dough.',
      '3. Add mozzarella and basil.',
      '4. Bake for 10-12 minutes.'
    ]
  },
  'Classic Burger': {
    ingredients: [
      '- 500g ground beef',
      '- 4 burger buns',
      '- Lettuce, tomato, cheese, pickles'
    ],
    directions: [
      '1. Form beef into patties, season with salt and pepper.',
      '2. Grill patties to desired doneness.',
      '3. Assemble burgers with buns and toppings.'
    ]
  },
  'Spaghetti Carbonara': {
    ingredients: [
      '- 200g spaghetti',
      '- 2 eggs',
      '- 1/2 cup grated Parmesan cheese',
      '- 100g pancetta'
    ],
    directions: [
      '1. Cook spaghetti according to package instructions.',
      '2. Fry pancetta until crisp.',
      '3. Mix eggs and cheese, combine with pasta and pancetta.',
      '4. Serve immediately.'
    ]
  },
  'Muffins with cocoa cream': {
    ingredients: [
      '- 1 cup flour',
      '- 1/2 cup cocoa powder',
      '- 1 tsp baking powder',
      '- 1/2 cup sugar'
    ],
    directions: [
      '1. Preheat oven to 350°F.',
      '2. Mix dry ingredients together.',
      '3. Add wet ingredients and mix until smooth.',
      '4. Bake for 20-25 minutes.'
    ]
  },
  'Beef doner with bread': {
    ingredients: [
      '- 500g beef slices',
      '- Pita bread',
      '- Lettuce, tomato, onion, tzatziki sauce'
    ],
    directions: [
      '1. Cook beef in a pan with seasoning.',
      '2. Warm pita bread.',
      '3. Assemble doner with beef and toppings.'
    ]
  },
  'Caesar Salad': {
    ingredients: [
      '- 1 head romaine lettuce',
      '- 1/2 cup croutons',
      '- 1/4 cup grated Parmesan cheese',
      '- Caesar dressing'
    ],
    directions: [
      '1. Chop lettuce and place in a bowl.',
      '2. Add croutons and cheese.',
      '3. Toss with Caesar dressing.'
    ]
  },
  'Grilled Salmon': {
    ingredients: [
      '- 2 salmon fillets',
      '- 1 lemon',
      '- Salt and pepper to taste'
    ],
    directions: [
      '1. Preheat grill to medium-high heat.',
      '2. Season salmon with salt, pepper, and lemon juice.',
      '3. Grill for 6-8 minutes per side.'
    ]
  },
  'Chocolate Cake': {
    ingredients: [
      '- 1 cup flour',
      '- 1 cup sugar',
      '- 1/2 cup cocoa powder',
      '- 1 tsp baking soda',
      '- 1/2 tsp baking powder'
    ],
    directions: [
      '1. Preheat oven to 350°F.',
      '2. Mix dry ingredients together.',
      '3. Add wet ingredients and mix until smooth.',
      '4. Bake for 30-35 minutes.'
    ]
  },
};

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;
  const details = recipesDetails[recipe.name];

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={recipe.image} style={styles.recipeImage}>
        <View style={styles.overlay}>
          <Text style={styles.recipeTitle}>{recipe.name}</Text>
          {recipe.rating && (
            <View style={styles.recipeRating}>
              <AntDesign name="star" size={16} color="gold" />
              <Text style={styles.recipeRatingText}>{recipe.rating}</Text>
            </View>
          )}
          {recipe.time && <Text style={styles.recipeDetail}>Time: {recipe.time}</Text>}
          {recipe.difficulty && <Text style={styles.recipeDetail}>Difficulty: {recipe.difficulty}</Text>}
        </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <Text style={styles.recipeText}>{details.ingredients.join('\n')}</Text>
        <Text style={styles.sectionTitle}>Directions</Text>
        <Text style={styles.recipeText}>{details.directions.join('\n')}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  recipeImage: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  recipeRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recipeRatingText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'white',
  },
  recipeDetail: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  detailContainer: {
    padding: 16,
  },
  recipeText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
});

export default RecipeDetailScreen;
