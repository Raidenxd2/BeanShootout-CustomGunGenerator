function generate() {
    // Get inputs
    const gunNameInput = document.getElementById("gunNameInput");
    const amountOfBulletsToShootInput = document.getElementById("amountOfBulletsToShootInput");
    const bulletsThatAreUsedInput = document.getElementById("bulletsThatAreUsedInput");
    const damageInput = document.getElementById("damageInput");
    const holdToShootInput = document.getElementById("holdToShootInput");
    const delayInput = document.getElementById("delayInput");
    const shootBackwardsInput = document.getElementById("shootBackwardsInput");
    const imageInput = document.getElementById("imageInput");

    // Create object with values
    var obj = new Object();
    obj.GunName = gunNameInput.value;
    obj.AmountOfBulletsToShoot = amountOfBulletsToShootInput.value;
    obj.BulletsThatAreUsed = bulletsThatAreUsedInput.value;
    obj.Damage = damageInput.value;
    obj.HoldToShoot = holdToShootInput.checked;
    obj.ShootBackwards = shootBackwardsInput.checked;
    obj.Delay = delayInput.value;

    // Create JSON
    var jsonString = JSON.stringify(obj);
    
    // Create Zip
    var zip = new JSZip();

    zip.file("gun.json", jsonString);
    zip.file("image.png", imageInput.files[0])

    // Download the Zip
    zip.generateAsync({type: "blob"})
    .then(function(content) {
        saveAs(content, gunNameInput.value + ".zip");
    });
}