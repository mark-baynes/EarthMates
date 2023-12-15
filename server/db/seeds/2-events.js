export async function seed(knex) {
  await knex('events').insert([
    {
      id: 1,
      name: 'Beach clean-up at Mission Bay',
      location: 'Auckland',
      date: '2024-12-05',
      description:
        'Beach clean-up at Mission Bay. Bring your own bucket and spade - it’s like building sandcastles, but for grown-ups!',
      added_by_user: 'auth0|655b15bea044d9589caa3368',
      photo: '/images/mission.png',
    },
    {
      id: 2,
      name: 'Tree planting at Mount Victoria',
      location: 'Wellington',
      date: '2024-11-20',
      description:
        'Tree planting at Mount Victoria. Get ready to dig deep and plant trees - it’s like hide and seek with saplings!',
      added_by_user: 'google-oauth2|113314505680548891591',
      photo: '/images/victoria.png',
    },
    {
      id: 3,
      name: 'River restoration in Avon River',
      location: 'Christchurch',
      date: '2024-10-15',
      description:
        'River restoration in Avon River. Help us make the river so clean, even the fish will be queuing for a swim!',
      added_by_user: 'auth0|652cb119071b925318906207',
      photo: '/images/avon.png',
    },
    {
      id: 4,
      name: 'Trail clean-up in Ben Lomond Track',
      location: 'Queenstown',
      date: '2024-09-10',
      description:
        'Trail clean-up in Ben Lomond Track. Tidy trails for tidy minds. And who knows, you might find some lost treasure!',
      added_by_user: 'google-oauth2|110018297537843173032',
      photo: '/images/lomond.png',
    },
    {
      id: 5,
      name: 'Wildlife habitat conservation in Whakarewarewa Forest',
      location: 'Rotorua',
      date: '2024-08-05',
      description:
        'Wildlife habitat conservation in Whakarewarewa Forest. It’s like setting up a five-star hotel for birds and bugs!',
      added_by_user: 'google-auth2|105615592442848302249',
      photo: '/images/Whakarewarewa.png',
    },
    {
      id: 6,
      name: 'Litter collection around Lake Taupo',
      location: 'Taupo',
      date: '2024-07-25',
      description:
        'Litter collection around Lake Taupo. We’re fishing for trash, not trout!',
      added_by_user: 'google-oauth2|113314505680548891591',
      photo: '/images/taupo.png',
    },
    {
      id: 7,
      name: 'Beach clean-up at Tahunanui Beach',
      location: 'Nelson',
      date: '2024-06-15',
      description:
        'Beach clean-up at Tahunanui Beach. Perfect your tan while tidying the sand!',
      added_by_user: 'google-oauth2|113314505680548891591',
      photo: '/images/Tahunanui.png',
    },
    {
      id: 8,
      name: 'Community gardening in The Octagon',
      location: 'Dunedin',
      date: '2024-05-20',
      description:
        'Community gardening in The Octagon. Get down and dirty with plants in the heart of Dunedin!',
      added_by_user: 'auth0|652cb119071b925318906207',
      photo: '/images/octagon.png',
    },
    {
      id: 9,
      name: 'Restoring native plants in Hamilton Gardens',
      location: 'Hamilton',
      date: '2024-04-10',
      description:
        'Restoring native plants in Hamilton Gardens. Be a plant superhero - capes optional!',
      added_by_user: 'google-oauth2|110018297537843173032',
      photo: '/images/hamilton.png',
    },
    {
      id: 10,
      name: 'Marine life protection at Mount Maunganui',
      location: 'Tauranga',
      date: '2024-03-30',
      description:
        'Marine life protection at Mount Maunganui. Dive into action and help our underwater neighbours!',
      added_by_user: 'google-auth2|105615592442848302249',
      photo: '/images/mount.png',
    },
    {
      id: 11,
      name: 'Eco-friendly waste management workshop',
      location: 'Invercargill',
      date: '2024-02-20',
      description:
        'Eco-friendly waste management workshop. Learn how to trash-talk... eco-style!',
      added_by_user: 'auth0|655b15bea044d9589caa3368',
      photo: '/images/eco.png',
    },
    {
      id: 12,
      name: 'Sustainable living seminar at Marine Parade',
      location: 'Napier',
      date: '2024-01-15',
      description:
        'Sustainable living seminar at Marine Parade. Go green or go home!',
      added_by_user: 'auth0|655b15bea044d9589caa3368',
      photo: '/images/marine.png',
    },
    {
      id: 13,
      name: 'Recycling drive at The Square',
      location: 'Palmerston North',
      date: '2022-12-05',
      description:
        'Recycling drive at The Square. Turning trash into treasure, one bottle at a time.',
      added_by_user: 'google-oauth2|110018297537843173032',
      photo: '/images/square.png',
    },
    {
      id: 14,
      name: 'Coastal cleanup at Fitzroy Beach',
      location: 'New Plymouth',
      date: '2022-11-20',
      description:
        'Coastal cleanup at Fitzroy Beach. Surfs up! But first, lets pick up some rubbish.',
      added_by_user: 'google-oauth2|110018297537843173032',
      photo: '/images/fitzroy.jpg',
    },
    {
      id: 15,
      name: 'Native tree planting at Titirangi Reserve',
      location: 'Gisborne',
      date: '2022-10-10',
      description:
        'Native tree planting at Titirangi Reserve. Plant a tree, make a bird happy.',
      added_by_user: 'google-auth2|105615592442848302249',
      photo: '/images/titirangi.png',
    },
  ])
}
