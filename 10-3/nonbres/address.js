var a =[
    {
        StreetAddress: "Orchard Avenue"    ,    Country: "United States"    },
    {
        StreetAddress: "Ann Street"    ,    Country: "United States"    },
    {
        StreetAddress: "John Street"     ,   Country: "United States"    },
    {
        StreetAddress: "Forest Street"    ,    Country: "United States"    },
    {
        StreetAddress: "Franklin Avenue"  ,      Country: "United States"    },
    {
        StreetAddress: "Cedar Lane"     ,   Country: "United States"    },
    {
        StreetAddress: "Orchard Avenue"    ,    Country: "United States"    },
    {
        StreetAddress: "Fairway Drive"    ,    Country: "United States"    },
    {
        StreetAddress: "Arlington Avenue"     ,   Country: "United States"    },
    {
        StreetAddress: "Cedar Lane"     ,   Country: "United States"    }
]


module.exports = function(id) {
    console.log(a[id]);
    return a[id];
}




