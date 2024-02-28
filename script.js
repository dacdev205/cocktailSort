const container = document.querySelector(".data-container");

let upload = document.getElementById('uploadFile');
let output = document.getElementById('output');
let quantity, temp;

// Hàm xử lý tập tin
uploadFile.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(uploadFile.files[0]);
    fr.onload = function () {
        let text = fr.result;
        quantity = text.split('\n').shift(); // Nhận hàng đầu tiên là số phần tử cần sắp xếp
        let txt = text.split('\n');
        let substring = txt[1].split(" ");
        // console.log(substring);
        temp = parseInt(quantity);
        // console.log(substring);
        // console.log("Độ dài của mảng là: " + substring.length)
        if (temp == substring.length) {
            const myElement = document.getElementById("container");
            myElement.innerHTML = '';
            for (let i = 0; i < substring.length; i++) {
                let value = substring[i];
                let bar = document.createElement("div");
                bar.classList.add("bar");
                bar.style.transform = `translateX(${i * 40}px) translateY(${Math.floor(Math.random() * 80) - 40}px) rotate(${Math.floor(Math.random() * 121) - 60}deg)`;            
                let barLabel = document.createElement("label");
                barLabel.classList.add("bar__id");
                barLabel.innerHTML = value;
                bar.appendChild(barLabel);
                container.appendChild(bar);
            }
        } else {
            alert("Số phần tử không khớp với số lượng phần tử đã thiết lập! Vui lòng kiểm tra lại tập tin");
        }
        if (temp != document.getElementById('quantity').value) {
            document.getElementById('quantity').value = temp;
        }

    }
});

// Khởi tạo dữ liệu sắp xếp
function initialBars() {
    const myElement = document.getElementById("space_sort");
    myElement.innerHTML = "";
    let number = document.getElementById("quantity").value;
    if (number == 0) {
        let num = 15;
        for (let i = 0; i < num; i += 1) {
            let value = Math.floor(Math.random() * 100) + 1;
            let bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.transform = `translateX(${i * 40}px) translateY(${Math.floor(Math.random() * 80) - 40}px) rotate(${Math.floor(Math.random() * 121) - 60}deg)`;            
            let barLabel = document.createElement("label");
            barLabel.classList.add("bar__id");
            barLabel.innerHTML = value;
            bar.appendChild(barLabel);
            myElement.appendChild(bar);
        }
    }
    if (number != 0) {
        let number = document.getElementById("quantity").value;
        for (let i = 0; i < number; i += 1) {
            let value = Math.floor(Math.random() * 100) + 1;
            let bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.transform = `translateX(${i * 40}px) translateY(${Math.floor(Math.random() * 80) - 40}px) rotate(${Math.floor(Math.random() * 121) - 60}deg)`;            
            let barLabel = document.createElement("label");
            barLabel.classList.add("bar__id");
            barLabel.innerHTML = value;
            bar.appendChild(barLabel);
            myElement.appendChild(bar);
        }
    }
}

// Thiết lập logic bảng code
function tableSetup() {
    const widthMath = () => {
        return `100%`;
    }
    const c6 = document.querySelector('#cd6');
    const c7 = document.querySelector('#cd7');
    c6.style.setProperty('--width', 0);
    c7.style.setProperty('--width', 0);
}

// Hàm để thực hiện thuật toán sắp xếp 
async function CocktailSort(delay = 600) { // asynchronous function 
    let number = document.getElementById('quantity').value;
    let slider = document.getElementById('timeout-slider');
    let timeoutValue = slider.value;
    backgroundImage = "linear-gradient(90deg, white, green)";
    const c2 = document.querySelector('#cd2');
    const c3 = document.querySelector('#cd3');
    const c4 = document.querySelector('#cd4');
    const c5 = document.querySelector('#cd5');
    const c6 = document.querySelector('#cd6');
    const c7 = document.querySelector('#cd7');
    const c8 = document.querySelector('#cd8');
    const c9 = document.querySelector('#cd9');
    const c10 = document.querySelector('#cd10');
    const c11 = document.querySelector('#cd11');

    if (number == 15 || number == "") {
        let bars = document.querySelectorAll(".bar");
        // Khởi tạo biến swapped để kiểm tra việc hoán đổi
        let swapped = true;
        // Khởi tạo biến s và e để giới hạn phạm vi duyệt
        let s = 0;
        let e = 15;
        const widthMath = () => {
            return `100%`;
        }
        // Lặp lại cho đến khi không còn hoán đổi nào được thực hiện
        while (swapped == true) {
            // Đặt lại giá trị swapped thành false
            swapped = false;
            c2.style.setProperty('--width', widthMath());
            c9.style.setProperty('--width', 0);
            c10.style.setProperty('--width', 0);
            c11.style.setProperty('--width', 0);
            slider.addEventListener("input", function () {
                timeoutValue = this.value;
            })
            // Duyệt từ trái sang phải và hoán đổi các phần tử không theo thứ tự
            for (var i = s; i < e - 1; i++) {
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                let rotate1 = bars[i].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
                // Lấy giá trị rotate của phần tử thứ i+1
                let rotate2 = bars[i + 1].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
                let transY1 = bars[i].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
                let transY2 = bars[i+1].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, timeoutValue)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                c3.style.setProperty('--width', widthMath());
                c4.style.setProperty('--width', 0);
                c5.style.setProperty('--width', 0);
                if (value1 > value2) {
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " > " + value2;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, timeoutValue)
                    );
                    c3.style.setProperty('--width', 0);
                    document.getElementById("messageDes").innerHTML = "Swap " + value1 + " and " + value2;
                    bars[i].style.transform = `translateX(${i * 40}px) translateY(${transY2}px) rotate(${rotate2}deg)`;
                    bars[i + 1].style.transform = `translateX(${(i + 1) * 40}px) translateY(${transY1}px) rotate(${rotate1}deg)`;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    c4.style.setProperty('--width', widthMath());
                    c5.style.setProperty('--width', widthMath());
                    c3.style.setProperty('--width', 0);
                    // Đặt lại giá trị swapped là true nếu có hoán đổi
                    swapped = true;
                }else{
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " < " + value2 + " => " + "do nothing" ;
                }

                
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeoutValue)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            // Giảm giá trị e đi 1 vì phần tử cuối đã được sắp xếp hoàn tất
            e = e - 1;
            // Kiểm tra nếu không có hoán đổi nào trong lần duyệt này
            if (swapped == false) {
                c6.style.setProperty('--width', widthMath());
                c7.style.setProperty('--width', widthMath());
                c3.style.setProperty('--width', 0);
                break;
            }
            c8.style.setProperty('--width', widthMath());
            // Đặt lại giá trị swapped là false
            swapped = false;
            c9.style.setProperty('--width', widthMath());
            c2.style.setProperty('--width', 0);
            c3.style.setProperty('--width', 0);
            c4.style.setProperty('--width', 0);
            c5.style.setProperty('--width', 0);
            c8.style.setProperty('--width', 0);
            // Duyệt từ phải sang trái và hoán đổi phần tử không theo thứ tự
            for (var i = e - 1; i >= s; i--) {
                let rotate1 = bars[i].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
                // Lấy giá trị rotate của phần tử thứ i+1
                let rotate2 = bars[i + 1].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
                let transY1 = bars[i].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
                let transY2 = bars[i+1].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, timeoutValue)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                c10.style.setProperty('--width', widthMath());
                c11.style.setProperty('--width', 0);
                if (value1 > value2) {
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " > " + value2;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, timeoutValue)
                    );
                    c11.style.setProperty('--width', widthMath());
                    c10.style.setProperty('--width', 0);
                    document.getElementById("messageDes").innerHTML = "Swap " + value1 + " and " + value2;
                    bars[i].style.transform = `translateX(${i * 40}px) translateY(${transY2}px) rotate(${rotate2}deg)`;
                    bars[i + 1].style.transform = `translateX(${(i + 1) * 40}px) translateY(${transY1}px) rotate(${rotate1}deg)`;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    // Đặt biến swapped là true nếu có hoán đổi
                    swapped = true;
                }else{
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " < " + value2 + " => " + "do nothing" ;
                }
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeoutValue)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            // Tăng giá trị s lên 1 vì phần tử đầu tiên đã được sắp xếp
            s = s + 1;
        }
        c6.style.setProperty('--width', widthMath());
        c7.style.setProperty('--width', widthMath());
        c2.style.setProperty('--width', 0);
        c3.style.setProperty('--width', 0);
        c9.style.setProperty('--width', 0);
        c10.style.setProperty('--width', 0);
        
        for (var x = 0; x < 15; x++) {
            bars[x].style.backgroundImage = `linear-gradient(90deg, rgb(230, 240, 250), rgb(60, 120, 200))`;
        }
        document.getElementById("messageDes").innerHTML = "Sorted Complete!"
    }
    else if (number != 15) {
        let bars = document.querySelectorAll(".bar");
        // Khởi tạo biến swapped để kiểm tra việc hoán đổi
        let swapped = true;
        let sortTemp;
        // Khởi tạo biến s và e để giới hạn phạm vi duyệt
        let s = 0;
        let e = number;
        const widthMath = () => {
            return `100%`;
        }
        // Lặp lại cho đến khi không có hoán đổi nào được thực hiện
        while (swapped == true) {
            // Đặt lại giá trị swapped thành false
            swapped = false;
            c2.style.setProperty('--width', widthMath());
            c9.style.setProperty('--width', 0);
            c10.style.setProperty('--width', 0);
            c11.style.setProperty('--width', 0);
            slider.addEventListener("input", function () {
                timeoutValue = this.value;
            })
            // Duyệt từ trái sang phải và hoán đổi các phần tử không theo thứ tự
            for (var i = s; i < e - 1; i++) {
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                let rotate1 = bars[i].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
            // Lấy giá trị rotate của phần tử thứ i+1
            let rotate2 = bars[i + 1].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
            let transY1 = bars[i].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
            let transY2 = bars[i+1].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, timeoutValue)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                c3.style.setProperty('--width', widthMath());
                c4.style.setProperty('--width', 0);
                c5.style.setProperty('--width', 0);
                if (value1 > value2) {
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " > " + value2;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, timeoutValue)
                    );
                    c3.style.setProperty('--width', 0);
                    document.getElementById("messageDes").innerHTML = "Swap " + value1 + " and " + value2;
                    bars[i].style.transform = `translateX(${i * 40}px) translateY(${transY2}px) rotate(${rotate2}deg)`;
                    bars[i + 1].style.transform = `translateX(${(i + 1) * 40}px) translateY(${transY1}px) rotate(${rotate1}deg)`;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    c4.style.setProperty('--width', widthMath());
                    c5.style.setProperty('--width', widthMath());
                    c3.style.setProperty('--width', 0);
                    // Đặt giá trị swapped thành true nếu có hoán đổi
                    swapped = true;
                }else{
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " < " + value2 + " => " + "do nothing" ;
                }
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, timeoutValue)
                );

                bars[i].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            // Kiểm tra nếu không có hoán đổi nào trong lần duyệt này
            if (swapped == false) {
                c6.style.setProperty('--width', widthMath());
                c7.style.setProperty('--width', widthMath());
                c3.style.setProperty('--width', 0);
                break;
            }
            c8.style.setProperty('--width', widthMath());
            // Đặt lại giá trị là false
            swapped = false;
            // Giảm giá trị biến e đi 1 vì phần tử cuối cùng đã được sắp xếp
            e = e - 1;
            c9.style.setProperty('--width', widthMath());
            c2.style.setProperty('--width', 0);
            c3.style.setProperty('--width', 0);
            c4.style.setProperty('--width', 0);
            c5.style.setProperty('--width', 0);
            c8.style.setProperty('--width', 0);
            // Duyệt từ phải sang trái và hoán đổi phần tử không đúng vị trí
            for (var i = e - 1; i >= s; i--) {
                let rotate1 = bars[i].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
                // Lấy giá trị rotate của phần tử thứ i+1
                let rotate2 = bars[i + 1].style.transform.match(/rotate\(([-]*\d+)deg\)/)[1];
                let transY1 = bars[i].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
                let transY2 = bars[i+1].style.transform.match(/translateY\(([-\d]+)px\)/)[1];
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, timeoutValue)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                c10.style.setProperty('--width', widthMath());
                c11.style.setProperty('--width', 0);
                if (value1 > value2) {
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " > " + value2;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, timeoutValue)
                    );
                    c11.style.setProperty('--width', widthMath());
                    c10.style.setProperty('--width', 0);
                    document.getElementById("messageDes").innerHTML = "Swap " + value1 + " and " + value2;
                    bars[i].style.transform = `translateX(${i * 40}px) translateY(${transY2}px) rotate(${rotate2}deg)`;
                    bars[i + 1].style.transform = `translateX(${(i + 1) * 40}px) translateY(${transY1}px) rotate(${rotate1}deg)`;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    // Đặt lại giá trị swapped là true nếu có hoán đổi
                    swapped = true;
                }else{
                    document.getElementById("messageDes").innerHTML = "If " + value1 + " < " + value2 + " => " + "do nothing" ;
                }
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, timeoutValue)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #BFEFFF,#6FB3FF)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            // Tăng biến s lên 1 vì phần tử đầu tiên đã được sắp xếp
            s = s + 1;
        }
        c6.style.setProperty('--width', widthMath());
        c7.style.setProperty('--width', widthMath());
        c2.style.setProperty('--width', 0);
        c3.style.setProperty('--width', 0);
        c9.style.setProperty('--width', 0);
        c10.style.setProperty('--width', 0);
        for (var x = 0; x < number; x++) {
            bars[x].style.backgroundImage = "linear-gradient(90deg, #16fb21, green)";
        }

        document.getElementById("messageDes").innerHTML = "Sorted Complete!"
    }
}

// Hàm xoá dữ liệu hiện có
function del() {
    const myElement = document.getElementById("container");
    myElement.innerHTML = '';
}

// Hàm kiểm tra số lượng phần tử từ input
function checkQuantity() {
    let number = document.getElementById('quantity').value;
    if (number < 0) {
        alert("Vui lòng nhập số lớn hơn 0");
    }
}

var flag = 0;

// Hàm thiết lập thời gian chờ trước khi tiếp tục thực hiện các lệnh kế tiếp
function waitforme(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, ms);
    })
}

// Hàm tạm dừng thực thi mã lệnh
function pauser() {
    return new Promise(resolve => {
        let playbuttonclick = function () {
            document.getElementById("Button5").removeAttribute("disabled");
            document.getElementById("Button7").removeAttribute("disabled", "true");
            document.getElementById("Button7").removeEventListener("click", playbuttonclick);
            flag = 0;
            resolve("resolved");
        }
        document.getElementById("Button7").addEventListener("click", playbuttonclick);
    })
}

document.getElementById("Button5").addEventListener("click", function () {
    flag = 1;
    if ($('#container').children().length != 0) {
        // alert("Chưa có dữ liệu so sánh nào cần được làm mới! Vui lòng nhấn TẠO MỚI để tạo dữ liệu mới và thực hiện lại chức năng này!");
        document.getElementById("Button5").setAttribute("disabled", "true");
        return;
    }
    document.getElementById("Button7").removeAttribute("disabled");
})

// document.getElementById("Button5").onclick = function (e) {
//     if ($('#container').children().length == 0) {
//         alert("Chưa có dữ liệu so sánh nào cần được làm mới! Vui lòng nhấn TẠO MỚI để tạo dữ liệu mới và thực hiện lại chức năng này!");
//         return;
//     }
//     return;
// }

// Hàm kiểm tra số lượng khi nhấn Enter
function runScript(e) {
    let quantity = document.getElementById("quantity").value;
    if (e.keyCode == 13) {
        if (quantity > 0) {
            initialBars();
        } else {
            alert("Bạn phải nhập số lớn hơn 0");
        }
    }
}

// Tạo ra các đối tượng input để nhập dữ liệu
let input_list = new Array();
function createInput() {
    let quantity = document.getElementById("quantity").value;
    document.getElementById("data_sort").innerHTML = "";
    for (let i = 1; i <= quantity; i++) {
        input_list[i] = document.createElement("INPUT");
        input_list[i].setAttribute("type", "number");
        input_list[i].setAttribute("style", "width: 56px");
        input_list[i].style.marginRight = "5px";
        input_list[i].style.marginBottom = "5px";
        input_list[i].style.marginTop = "5px";
        input_list[i].style.height = "25px";
        document.getElementById("data_sort").appendChild(input_list[i]);
    }
}

// Tạo ra dữ liệu sắp xếp do người dùng nhập
function generateUserType() {
    const myElement = document.getElementById("container");
    myElement.innerHTML = '';
    let quantity = document.getElementById("quantity").value;
    for (let i = 1; i <= quantity; i++) {
        let value = input_list[i].value;
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.transform = `translateX(${i * 40}px) translateY(${Math.floor(Math.random() * 80) - 40}px) rotate(${Math.floor(Math.random() * 121) - 60}deg)`;
        let barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

// Hàm quyết định nên dùng cách tạo dữ liệu nào?
function checkData() {
    let quantity = document.getElementById("quantity").value;
    for (let i = 1; i <= quantity; i++) {
        if (input_list[i].value == 0) {
            initialBars();
        } else {
            generateUserType();
        }
    }
    if (quantity == 0) {
        initialBars();
    }
}

// Kiểm tra file đã được thêm hay chưa?
function checkFile() {
    if (document.getElementById("uploadFile").files.length != 0 || document.getElementById("uploadFile").files.length == 0) {
        $('#Button1-1').on('click', function (e) {
            var $element = $('#uploadFile');
            $element.wrap('<form>').closest('form').get(0).reset();
            $element.unwrap();
        });
        $('#Button6').on('click', function (e) {
            var $element = $('#uploadFile');
            $element.wrap('<form>').closest('form').get(0).reset();
            $element.unwrap();
        });

    }
}

// Hàm mở bảng code
function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}

// Hàm đóng bảng code
function closeNavigation() {
    document.getElementById("mySidenav").style.width = "0";
}

let slider = document.getElementById("timeout-slider");
let timeoutValue = slider.value;
// Hàm thiết lập thanh trượt tốc độ sắp xếp
slider.addEventListener("input", function () {
    // Sử dụng giá trị mới của slide
    timeoutValue = this.value;
    document.getElementById("range-value").innerHTML = `${timeoutValue}`;
});