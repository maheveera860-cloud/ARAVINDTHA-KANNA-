function showDetails(eventType) {
  const title = document.getElementById('eventTitle');
  const info = document.getElementById('eventInfo');
  const details = document.getElementById('details');

  if (eventType === 'music') {
    title.textContent = '🎵 Music Event';
    info.textContent = 'A vibrant concert featuring a guest rock band, DJs, and indie-pop acts. The crowd and lighting create an electrifying atmosphere.';
  } else if (eventType === 'tropical') {
    title.textContent = '🌴 Tropical Party';
    info.textContent = 'An electronic music night with tropical themes, neon lights, and energetic dancing. A fusion of paradise and party.';
  } else if (eventType === 'hiphop') {
    title.textContent = '🎧 The Hip Hop Festival';
    info.textContent = 'Experience legendary artists like Eminem, Jay-Z, Missy Elliott, and more at Glasgow’s biggest hip-hop celebration on Nov 15, 2025.';
  }

  details.classList.remove('hidden');
}
