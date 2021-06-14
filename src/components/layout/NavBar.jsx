import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

const navigation = [ROUTES.home, ROUTES.settings, ROUTES.records];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

// TODO: Refactor
export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-gradient-to-r from-blue-500 to-purple-700">
            {() => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <div className="text-3xl">⚓</div>
                                    <div className="text-2xl font-semibold text-white">BATTLESHIP</div>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link key={item.name} to={item.path}>
                                                <span
                                                    className={classNames(
                                                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium',
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
