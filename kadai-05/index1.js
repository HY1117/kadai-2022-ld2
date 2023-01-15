const profile = {
    name: "北岡",
    age: 30,
    hobby: "ドライブ",
    major: "法律学",
}

const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
}

for (const key of Object.keys(profile)){
    console.log("私の" + dictionary[key] + "は" + profile[key] + "です")
}
//console.log("私の名前は" + profile.name + "です")