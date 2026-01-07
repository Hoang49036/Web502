// 1️⃣ Ham tra ve chu vi va dien tich hinh chu nhat
function thongTinHinhChuNhat(rong: number, cao: number): { chuVi: number; dienTich: number } {
    const chuVi = 2 * (rong + cao);
    const dienTich = rong * cao;
    return { chuVi, dienTich };
}

// 2️⃣ Ham tinh tong nhieu so (su dung rest parameter)
function tongNhieuSo(...cacSo: number[]): number {
    return cacSo.reduce((tong, so) => tong + so, 0);
}

// 3️⃣ Ham tra ve so lan xuat hien cua 1 ky tu trong chuoi
function demKyTu(chuoi: string, kyTu: string): number {
    let dem = 0;
    for (const c of chuoi) {
        if (c === kyTu) {
            dem++;
        }
    }
    return dem;
}

// 4️⃣ Ham kiem tra so nguyen to
function laSoNguyenTo(so: number): boolean {
    if (so < 2) return false;
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) return false;
    }
    return true;
}
