const input = document.getElementById("input")

function check() {
    const value = input.value
    let reversed = value.split("").reverse().join("");
    alert(value === reversed)

    input.value = ""
}