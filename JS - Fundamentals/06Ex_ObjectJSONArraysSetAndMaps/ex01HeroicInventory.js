function func(input) {
    let heroData = [];
    for (let i = 0; i < input.length; i++) {
        let currentHeroArgs = input[i].split(' / ');

        let currentHeroName = currentHeroArgs[0];
        let currentHeroLevel = Number(currentHeroArgs[1]);
        let currentHeroItems = [];
        if (currentHeroArgs.length > 2) {
            currentHeroItems = currentHeroArgs[2].split(', ');
        }
        let hero={
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        heroData.push(hero);

    }
    console.log(JSON.stringify(heroData));
}

func(['Jake / 1000 / Gauss, HolidayGrenade']);