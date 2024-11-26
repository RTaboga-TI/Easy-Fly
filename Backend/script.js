  var modal = document.querySelector('.modal-container')
  const tbody = document.querySelector('tbody')
  const sSaida = document.querySelector('#m-saida')
  const sChegada = document.querySelector('#m-chegada')
  const sData = document.querySelector('#m-data')
  const btnSalvar = document.querySelector('#btnSalvar')

  let itens
  let id

  function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }

    if (edit) {
      sSaida.value = itens[index].saida
      sChegada.value = itens[index].chegada
      sData.value = itens[index].sdata
      id = index
    } else {
      sSaida.value = ''
      sChegada.value = ''
      sData.value = ''
    }
    
  }

  function editItem(index) {

    openModal(true,index)
  }

  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }

  function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
      <td>${item.saida}</td>
      <td>${item.chegada}</td>
      <td>${item.data}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
  }

  btnSalvar.onclick = e => {
    
    if (sSaida.value == '' || sChegada == '' || sData.value == '') {
      return
    }

    e.preventDefault();

    if (id !== undefined) {
      itens[id].saida = sSaida.value
      itens[id].chegada = sChegada.value
      itens[id].data = sData.value
    } else {
      itens.push({'saida': sSaida.value, 'chegada': sChegada.value, 'data': sData.value})
    }

    setItensBD()

    modal.classList.remove('active')
    loadItens()
    id = undefined
  }

  function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })

  }

  const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
  const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

  loadItens()
