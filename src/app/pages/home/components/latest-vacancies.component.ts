import { Component } from '@angular/core';

interface Vacancy {
  companyLogo: string;
  company: string;
  position: string;
  salary: string;
  experience: string;
}

@Component({
  selector: 'app-latest-vacancies',
  standalone: false,
  template: `
  <section class="px-4 md:px-16 lg:px-60 py-6">
    <h2 class="text-2xl md:text-3xl text-gray-900 font-bold mb-2">Последние вакансии</h2>
    <p class="text-lg text-gray-700 mb-4">Найдите работу, которая соответствует вашим требованиям</p>
    <div class="space-y-4">
      <div *ngFor="let vacancy of vacancies" class="flex items-center h-[200px] bg-gray-100 p-4 rounded-lg shadow-md">
        <img src="{{ vacancy.companyLogo }}" alt="{{ vacancy.company }}" class="w-12 h-12 rounded-full mr-4">
        <div class="flex gap-36">
          <div class="flex flex-col gap-3">
            <span class="text-lg opacity-[0.6]">Компания</span>
            <h3 class="text-lg">{{ vacancy.company }}</h3>
            <p class="text-lg opacity-[0.6]">Бишкек, Кыргызстан</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="text-lg opacity-[0.6]">Позиция</span>
            <h3 class="text-lg">{{ vacancy.position }}</h3>
            <p class="text-lg opacity-[0.6]">Информационные технологии</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="text-lg opacity-[0.6]">Оклад</span>
            <h3 class="text-lg">{{ vacancy.salary }}</h3>
            <p class="text-lg opacity-[0.6]">Полная занятость</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="text-lg opacity-[0.6]">Опыт работы</span>
            <h3 class="text-lg">{{ vacancy.experience }}</h3>
          </div>
        </div>
      </div>
    </div>
    <button class="mt-10 ml-[500px] text-white text-lg font-medium bg-blue-600 w-[350px] h-[50px] rounded-full">Посмотреть все вакансии</button>
  </section>
  `,
})
export class LatestVacanciesComponent {
  vacancies: Vacancy[] = [
    {
      companyLogo: 'https://s3-alpha-sig.figma.com/img/be4e/79d0/5de2e4a73fb52418485701e00f754a78?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WyBRs170CFVPFUj6uTliir2RLVM~dnc5i8trQnnwssn0YwdorWGePclDOzlGmQDVXaOFdlA3jfSHdHYbyMNZcKNk2E7-ZK0~-uMHcq1O5jGI6MwXnmMSaGYL9YJfcrmUi6xNAuaCbmLBUSK30rD5UGbmTlJYIXwEF-jzA7xNg8fyZKGWXSsehjYS~qL5LmGmDP69gNI9EV5iP3TBY6sMWib1YP-CS7C4HEtMGOD439W~Zv6bB~HpSpgfYxHr9oIM2IgnWewG~x50CTSeDsiHJEPUVltvGDvlg6g5SHjpSzSF-Dvv1o49EWUaIdeQ1FzKWPDGERHs--xLoOpkQM-ntA__',
      company: 'FortyLines IO',
      position: 'Менеджер по продажам',
      salary: '50 000 Сом',
      experience: 'От 1 года до 3 лет'
    },
    {
      companyLogo: 'https://s3-alpha-sig.figma.com/img/a49a/ba9e/9afbe88147df0f9f48d456c40f38ca14?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hOr2yzFEDJHeSEuTEqf27uVN8Z~FCxAWBxui7tONC5b3teT1rBtaivlKPxzlwSaX5tJKYsXee-rg8y0Yz9LS~iLMQuDmUbMkQ2X-YyQwWn6bHRLtH7xqcvoC3Fc57ExIIMKqzkUqUHnJo~IIb39r17bxPh~RikuDENkSKJLjNHbLipbIA-jKmMYY4tQp2sjzpYHa-ZjSC1LNtsFOnoCbteYO4n5wxaDaXOr0n~1s334iXImbz2h6dloPIpzAaqwweW6Ul8ccS4llvnY9QjHFKhriDVavIk-IbJqRQWDy3AasLgAXQMWdfgkbZM~CUky1rYjhDj1TS8rgpmQR4lEZIA__',
      company: 'CodifyLab',
      position: 'Junior Backend разработчик',
      salary: '30 000 - 50 000 Сом',
      experience: 'От 1 года до 3 лет'
    },
    {
      companyLogo: 'https://s3-alpha-sig.figma.com/img/07e1/8ac7/857d9d01e1a4548ca8c20e6dfd6eedab?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eRenLz5yDP4j8hutBzV-an-Qentv6xvcrRD7JSgdgZ3FIWAhcOiWBUwK-pCUSIyX9zuSlhkYOKf9hCC1vqpBDmffeByy1UwwAQ1oFO1ibfekphYyHbJAdhmPfsKurHm8n0IqNzrwiajQnCkqUgnPly~zOiBWdjbjpkBM6~PPfLCr2kgDML1HoW4txCb~r2tehHw58Gaddyewg0ije2ib1cBXvsExRFz3RDEonc8KcEpGP9AAECcMpKOhEJ3HmKFVF60F2wK0nZIk0tnKhge1X~HDcw~C7SiIs3lKS0TmLQDq0EPe79u0UazzAgBW-ZrG65o4fKFw1HJQioknMud9Rg__',
      company: 'Beeliner',
      position: 'Бизнес Аналитик отдела ИТ',
      salary: '80 000 Сом',
      experience: 'От 1 года до 3 лет'
    }
  ];
}

