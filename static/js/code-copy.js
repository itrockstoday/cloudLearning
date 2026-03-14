document.querySelectorAll('pre > code').forEach((codeBlock) => {
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre);

    button.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
            button.innerText = 'Copied!';
            setTimeout(() => { button.innerText = 'Copy'; }, 2000);
        });
    });
});