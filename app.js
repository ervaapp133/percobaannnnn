/**
 * NEIGHBORSWAP - Single File Simulation
 * All features represented in one file
 */

// ===== DATABASE SIMULASI =====
let users = [];
let items = [];
let swaps = [];

// ===== AUTENTIKASI =====
function register(username, location) {
  const user = { id: users.length + 1, username, location, points: 0 };
  users.push(user);
  return user;
}

// ===== TAMBAH BARANG =====
function addItem(userId, itemName, category) {
  const item = {
    id: items.length + 1,
    userId,
    itemName,
    category,
    status: "available"
  };
  items.push(item);
  return item;
}

// ===== LIHAT BARANG TERSEDIA =====
function getAvailableItems() {
  return items.filter(item => item.status === "available");
}

// ===== PROSES SWAP =====
function requestSwap(requesterId, itemId) {
  const swap = {
    id: swaps.length + 1,
    requesterId,
    itemId,
    status: "pending"
  };
  swaps.push(swap);
  return swap;
}

// ===== TERIMA SWAP =====
function approveSwap(swapId) {
  const swap = swaps.find(s => s.id === swapId);
  const item = items.find(i => i.id === swap.itemId);

  if (swap && item) {
    swap.status = "approved";
    item.status = "swapped";

    // Gamifikasi (Future Feature)
    const user = users.find(u => u.id === swap.requesterId);
    user.points += 10;

    return "Swap berhasil!";
  }
}

// ===== AI RECOMMENDATION (SIMULASI) =====
function recommendItems(category) {
  return items.filter(item => item.category === category);
}

// ===== EVENT KOMUNITAS (SIMULASI) =====
function createCommunityEvent(name, location) {
  return {
    eventName: name,
    location,
    status: "scheduled"
  };
}

// ===== TEST SIMULASI =====
const user1 = register("Andi", "RT 03");
const user2 = register("Budi", "RT 04");

addItem(user1.id, "Kipas Angin", "Elektronik");
addItem(user2.id, "Buku Novel", "Buku");

console.log(getAvailableItems());
console.log(requestSwap(user2.id, 1));
console.log(approveSwap(1));
console.log("Rekomendasi Buku:", recommendItems("Buku"));
console.log(createCommunityEvent("Swap Day", "Balai Warga"));
