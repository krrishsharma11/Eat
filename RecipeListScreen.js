import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const todayRecipes = [
  { id: '1', name: 'Penne pasta tomato', image: require('../assets/penne.jpeg'), rating: 4.8 },
  { id: '2', name: 'Stuffed with chicken', image: require('../assets/chicken.jpeg'), time: '40 mins', difficulty: 'Medium' },
  { id: '3', name: 'Margherita Pizza', image: require('../assets/pizza.jpeg'), rating: 4.7 },
  { id: '4', name: 'Classic Burger', image: require('../assets/burger.jpeg'), rating: 4.5 },
  { id: '5', name: 'Spaghetti Carbonara', image: require('../assets/spaghetti.jpeg'), rating: 4.9 },
];

const recommendedRecipes = [
  { id: '6', name: 'Muffins with cocoa cream', image: require('../assets/muffins.jpeg'), author: 'Emma Olivia', time: '20 mins', difficulty: 'Easy', rating: 4.6 },
  { id: '7', name: 'Beef doner with bread', image: require('../assets/beef.jpeg'), author: 'John Doe', time: '30 mins', difficulty: 'Medium', rating: 4.5 },
  { id: '8', name: 'Caesar Salad', image: require('../assets/salad.jpeg'), author: 'Jane Smith', time: '15 mins', difficulty: 'Easy', rating: 4.3 },
  { id: '9', name: 'Grilled Salmon', image: require('../assets/salmon.jpeg'), author: 'James Brown', time: '25 mins', difficulty: 'Medium', rating: 4.8 },
  { id: '10', name: 'Chocolate Cake', image: require('../assets/cake.jpeg'), author: 'Lucy Green', time: '45 mins', difficulty: 'Hard', rating: 4.7 },
];

const RecipeListScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const filterRecipes = (recipes, query) => {
    if (!query) {
      return recipes;
    }
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredTodayRecipes = filterRecipes(todayRecipes, searchText);
  const filteredRecommendedRecipes = filterRecipes(recommendedRecipes, searchText);

  const renderRecipeCardHorizontal = (item) => (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
      <View style={styles.recipeCardHorizontal}>
        <Image source={item.image} style={styles.recipeImage} />
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeName}>{item.name}</Text>
          {item.rating && (
            <View style={styles.recipeRating}>
              <AntDesign name="star" size={16} color="gold" />
              <Text style={styles.recipeRatingText}>{item.rating}</Text>
            </View>
          )}
          {item.time && <Text style={styles.recipeDetail}>{item.time}</Text>}
          {item.difficulty && <Text style={styles.recipeDetail}>{item.difficulty}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderRecipeCardVertical = (item) => (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
      <View style={styles.recipeCardVertical}>
        <Image source={item.image} style={styles.recipeImageVertical} />
        <View style={styles.recipeInfoVertical}>
          <Text style={styles.recipeName}>{item.name}</Text>
          {item.rating && (
            <View style={styles.recipeRating}>
              <AntDesign name="star" size={16} color="gold" />
              <Text style={styles.recipeRatingText}>{item.rating}</Text>
            </View>
          )}
          {item.time && <Text style={styles.recipeDetail}>{item.time}</Text>}
          {item.difficulty && <Text style={styles.recipeDetail}>{item.difficulty}</Text>}
          {item.author && <Text style={styles.recipeDetail}>By {item.author}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHorizontalRecipes = () => (
    <FlatList
      data={filteredTodayRecipes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => renderRecipeCardHorizontal(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.horizontalList}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What would you like to Cook?</Text>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search recipes"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton}>
          <AntDesign name="search1" size={20} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Today Recipes</Text>
      {renderHorizontalRecipes()}

      <Text style={styles.sectionTitle}>Recommended</Text>
      <FlatList
        data={filteredRecommendedRecipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => renderRecipeCardVertical(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchButton: {
    position: 'absolute',
    right: 15,
  },
  searchIcon: {
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  horizontalList: {
    marginBottom: 20,
  },
  recipeCardHorizontal: {
    width: 150,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom:335,
  },
  recipeCardVertical: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: 120,
  },
  recipeImageVertical: {
    width: 100,
    height: 100,
  },
  recipeInfo: {
    padding: 10,
  },
  recipeInfoVertical: {
    flex: 1,
    padding: 10,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  recipeRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  recipeRatingText: {
    marginLeft: 5,
    fontSize: 14,
  },
  recipeDetail: {
    fontSize: 14,
    color: '#888',
  },
});

export default RecipeListScreen;
