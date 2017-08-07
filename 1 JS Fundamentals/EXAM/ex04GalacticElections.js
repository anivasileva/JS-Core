function func(array) {
    let map = new Map();

    for (let arr of array) {
        let system = arr.system;
        let candidate = arr.candidate;
        let votes = arr.votes;

        if (!map.has(system)) {
            map.set(system, new Map());
        }
        if (!map.get(system).has(candidate)) {
            map.get(system).set(candidate, 0);
        }

        let oldSum = map.get(system).get(candidate);
        map.get(system).set(candidate, votes + oldSum);
    }
    for (let [system,candidates] of map) {
        let newsum=0;
        for (let [candidate,votes] of candidates) {

            newsum+=votes;
            console.log(newsum);
        }
    }

    console.log(map)


}

func([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]
);