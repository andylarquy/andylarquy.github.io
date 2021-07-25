const getPageDomain = () => {
  const domain = window.location.hostname
  return domain.includes('www') ? domain.replace('www.', '') : domain
}

const chatIframe = document.getElementById('chat-iframe')
const ytEmbeddedUrl = chatIframe.getAttribute('src')
chatIframe.setAttribute('src', ytEmbeddedUrl + getPageDomain())