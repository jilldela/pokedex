json.extract! @pokemon, :id, :name, :defense, :attack, :moves, :poke_type, :items
json.image_url asset_path(@pokemon.image_url)

json.items @pokemon.items
