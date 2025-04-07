const router = require('express').Router()
const recipes = require('../../../../data/recipes.json')

router.get('/', async(__,response) => {
    const recipeData = recipes.map(({ id, title, image, prepTime, difficulty }) => {
        return { id, title, image, prepTime, difficulty }
    })
    response.send(recipeData)
})
router.post('/recipe/add', async(request,response) => {
    const newRecipe = { ...request.body, id: recipes.length + 1}
    recipes.push(newRecipe)
    response.send(newRecipe)
})
router.get('/recipe/:id', async(request,response) => {
    const found = recipes.find( data => data.id.toString() === request.params.id )
    if (found) response.send(found)
    else response.send({ error: `Can't find recipe: ${id}`})
})

module.exports = router
