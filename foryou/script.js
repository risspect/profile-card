document.getElementById('risna').addEventListener('click', function() {
	Swal.fire({
		title: 'Halo Sayang',
		text: 'Aku ada pertanyaan nih buat kamu',
		icon: 'question',
		confirmButtonText: 'Lanjut..'
	}).then(function () {
		Swal.fire({
			title: 'Tapi Jawab nya jujur yaa..',
			text: 'Awas aja boong!!',
			icon: 'warning',
			confirmButtonText: 'Iyaa'
		}).then(function () {
			Swal.fire({
				title: 'Inget, Jangan boong!!',
				text: 'Okee?',
				icon: 'error',
				confirmButtonText: 'Okee'
			}).then(function () {
				const { value: name } = Swal.fire({
					title: 'Sebelumnya..',
					inputLabel: 'Kasih tau dulu dong nama kamu..',
					input: 'text',
					confirmButtonText: 'udahh',
					inputValidator: (value) => {
						if (!value) {
							return('kasih tau dong..')
						} else {
							nama = value;
						}
					}
				}).then((result) => {
					Swal.fire({
						title: `Oke ${nama}`,
						text: 'Sekarang aku mulai pertanyaannya yaa..',
						icon: 'success',
						confirmButtonText: 'Oke..'
					}).then(function () {
						Swal.fire({
							title: 'Emm..',
							text: `${nama} sayang ga sama Risna?`,
							icon: 'question',
							showDenyButton: true,
							confirmButtonText: `Sayang:)`,
							denyButtonText: `Gak!:(`
						}).then((result) => {
							if (result.isConfirmed) {
								Swal.fire({
									title: 'Hehe..',
									text: `Risna Juga sayang sama ${nama}`,
									confirmButtonText: 'Iyaa..'
								}).then(function() {
									Swal.fire({
										title: 'Coba..',
										inputLabel: `Berapa persen sayangnya ${nama} sama Risna?`,
										input: 'range',
										inputAttributes: {
											min: '1',
											max: '100',
											step: 1
										},
										inputValue: 50
									}).then((e) => {
										const val = e.value
										Swal.fire({
											title: 'Emm..',
											text: `Makasih yaa ${nama} udah sayang sama risna ${val}%`,
											confirmButtonText: 'iyaa..'
										}).then(function () {
											Swal.fire({
												title: 'Sekarang..',
												text: `${nama} kangen ga sama Risna?`,
												confirmButtonText: 'Kangen:(',
												showDenyButton: true,
												denyButtonText: 'Gak_-'
											}).then((result) => {
												if (result.isConfirmed) {
													Swal.fire({
														title: 'hehe..',
														text: `Sama Risna juga kangen sama ${nama}`,
														confirmButtonText: 'Iya sayangg'														
													}).then(function () {
														Swal.fire({
															title: `Terakhir nih buat ${nama}`,
															text: 'Coba tulis sesuatu tentang Risna sama tulis kapan kita mau ketemu, klik tanda hati di bawah yaa',
															footer: '<a href="https://secreto.site/id/20364229"><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i></a>',
															showConfirmButton: false,
															icon: 'success'
														})
													})
												} else {
													Swal.fire({
														title: 'OKE DEH',
														text: 'Bye!',
														showConfirmButton: false,
														showCancelButton: true,
														cancelButtonText: 'Ok'
													})
												}
											})
										})
									})
								})
							} else {
								Swal.fire({
									title: 'Oh gitu',
									text: `Jadi selama ini ${nama} ga sayang sama aku?`,
									showConfirmButton: false,
									showCancelButton: true,
									cancelButtonText: 'Ya'
								})
							}
						})
					})
				})
			})
		})
	})
})