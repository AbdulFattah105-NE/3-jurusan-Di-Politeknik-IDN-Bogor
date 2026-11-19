function showDetail(jurusan) {
  const detailBox = document.getElementById('detail');
  let content = '';

  switch (jurusan) {
    case 'designer':
      content = `
        <h3>Detail Jurusan Designer</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>Figma & Prototyping</li>
          <li>UX Research</li>
          <li>3D & Marketplace Design</li>
        </ul>`;
      break;
    case 'programmer':
      content = `
        <h3>Detail Jurusan Programmer</h3>
        <ul>
          <li>Web & Mobile Development</li>
          <li>PHP, MySQL, CSS</li>
          <li>Laravel Framework</li>
          <li>Flutter for Android</li>
        </ul>`;
      break;
    case 'engineer':
      content = `
        <h3>Detail Jurusan Engineer</h3>
        <ul>
          <li>Computer Networking</li>
          <li>Cisco CCNA, Mikrotik</li>
          <li>DevOps & Cloud (AWS)</li>
          <li>CNIP, COE Certification</li>
        </ul>`;
      break;
  }

  detailBox.innerHTML = content;
  detailBox.classList.remove('hidden');
}
