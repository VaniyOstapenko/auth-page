class AuthPage {
    doPage2() {
        const btn = document.querySelector('.button');

        btn.addEventListener('click', function () {
            try {
                const inp1 = document.querySelector('.input1');
                const inp2 = document.querySelector('.input2');
                const inp3 = document.querySelector('.input3');
                if (!/^[\w\.\-\$]+@[a-z]+\.[a-z]{2,4}|\+[0-9]{12}$/g.test(inp1.value)) {
                    throw new Error('ошибка ввода e-mail or phone number')
                } if (!/^[\w\W]{8,100}$/g.test(inp2.value) || !/^[\w\W]{8,100}$/g.test(inp3.value)) {
                    throw new Error(`ошибка ввода password`)
                } if (inp2.value !== inp3.value) {
                    throw new Error('Ошибка ввода (не одинаковые пароли)')
                }
                alert('Вы успешно зарегистрированы')
                inp1.value = '';
                inp2.value = '';
                inp3.value = '';
            } catch (error) {
                alert(error.message);
            }
        })
    }
}

const authPage = new AuthPage();
const result = authPage.doPage2();
console.log(result);