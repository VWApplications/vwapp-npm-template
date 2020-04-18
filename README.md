## Template para criação de pacotes NPM.

Para usar precisa-se instalar o cookiecutter.

Documentação: https://cookiecutter.readthedocs.io/en/1.7.0/index.html

### MACOS

```
$ brew install cookiecutter
```

### Ubuntu

```
$ sudo apt-get install cookiecutter
```

### Uso

Ai instalar o cookiecutter é só pegar a url do template e gerar o pacote.

```
cookiecutter https://github.com/<UserName>/<nome-do-template>.git
OU
cookiecutter local-template/
```

### Filtros

O filtros são funções python que ficam ao lado direito do valor que será aplicado o filtro separado por um pipe.

```
{{Victor Deon | lower | replace(' ', '-') }}
```

Filtros padrões:

* **lower**: Deixa os caracteres minusculos.
* **replace(target, value)**: Troca todos os target pelos values.