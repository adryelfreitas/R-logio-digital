function atualizarRelogio() {
  const agora = new Date();

  const fusos = {
    br: 0, // Horário de Brasília (considerando que o servidor está no mesmo fuso)
    ny: -2, // Nova York (UTC-3 para horário padrão ou UTC-4 para horário de verão)
    lon: -4, // Londres (UTC-0, mas pode ter horário de verão UTC+1)
    tok: +9, // Tóquio (UTC+9, sem horário de verão)
  };

  for (const [local, diferenca] of Object.entries(fusos)) {
    const dataLocal = new Date(agora.getTime() + diferenca * 3600000);

    let hr = dataLocal.getHours().toString().padStart(2, '0');
    let min = dataLocal.getMinutes().toString().padStart(2, '0');
    let s = dataLocal.getSeconds().toString().padStart(2, '0');

    document.getElementById(`horas-${local}`).textContent = hr;
    document.getElementById(`minutos-${local}`).textContent = min;
    document.getElementById(`segundos-${local}`).textContent = s;
  }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
