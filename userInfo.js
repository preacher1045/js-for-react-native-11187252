function createUserProfiles(originalName, modifiedName) {
    let userProfiles = [];

    // Use the length of originalName or modifiedName (assuming both arrays have the same length)
    for (let i = 0; i < originalName.length; i++) {
        let userProfile = {
            originalName: originalName[i],
            modifiedName: modifiedName[i],
            id: i + 1
        };

        userProfiles.push(userProfile);
    }

    return userProfiles;
}

let originalName = ["Alexander", "Kofi", "Akpemada", "Little"];
let modifiedName = ["Adjei Alexander", "Adjei Kofi", "Nkrow Akpemada", "Mad Little"];

const userProfiles = createUserProfiles(originalName, modifiedName);

console.log(userProfiles);
