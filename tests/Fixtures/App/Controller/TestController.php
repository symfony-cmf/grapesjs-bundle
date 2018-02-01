<?php
/*
 * This file is part of the Symfony CMF package.
 *
 * (c) 2011-2017 Symfony CMF
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Cmf\Bundle\GrapesjsBundle\Tests\Fixtures\App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Cmf\Bundle\GrapesjsBundle\Form\Type\GrapesInput;
use Symfony\Cmf\Bundle\GrapesjsBundle\Tests\Fixtures\App\Model\PageModel;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class TestController extends Controller
{
    public function showContentToForm()
    {
        $page = new PageModel();
        $page->setTitle('Testing content to form');
        $page->setBody('Testing body on content to form');
        $form = $this->createFormBuilder($page)
            ->add('title', TextType::class)
            ->add('body', GrapesInput::class)
            ->getForm();

        return $this->render('content-to-form.html.twig', ['form' => $form->createView()]);
    }
}
