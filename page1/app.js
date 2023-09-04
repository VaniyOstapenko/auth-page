class AuthPage {
    doPage1() {
        const btn = document.querySelector('.button');

        btn.addEventListener('click', function () {
            try {
                const inp = document.querySelector('.input1');
                const inp2 = document.querySelector('.input2')
                if (!/^[\w\.\-\$]+@[a-z]+\.[a-z]{2,4}|\+[0-9]{12}$/g.test(inp.value)) {
                    throw new Error(`ошибка ввода e-mail or phone number`)
                } if (!/^[\w\W]{8,100}$/g.test(inp2.value)) {
                    throw new Error(`ошибка ввода password`)
                }
                alert('авторизованы в системе');
                inp.value = '';
                inp2.value = '';
            } catch (error) {
                alert(error.message);
            }
        })
    }
}

const authPage = new AuthPage();
const result = authPage.doPage1()
console.log(result);